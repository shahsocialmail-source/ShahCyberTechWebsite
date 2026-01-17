import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type FormState = {
  name: string;
  email: string;
  countryCode: string; // e.g. +44
  phone: string;
  message: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function FirstVisitContactModal() {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    countryCode: "+44",
    phone: "",
    message: "",
  });

  const nameRef = useRef<HTMLInputElement | null>(null);

  // Open only on first visit
    useEffect(() => {
    setTimeout(() => setOpen(true), 500);
    }, []);


  // Lock body scroll + focus first field
  useEffect(() => {
    if (!open) return;

    document.body.classList.add("overflow-hidden");
    setTimeout(() => nameRef.current?.focus(), 50);

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.classList.remove("overflow-hidden");
      window.removeEventListener("keydown", onKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  function close() {
    setOpen(false);
    }
  }

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("idle");

    if (!form.name.trim()) return setStatus("err");
    if (!isValidEmail(form.email)) return setStatus("err");
    if (!form.phone.trim()) return setStatus("err");
    if (!form.message.trim()) return setStatus("err");

    setSubmitting(true);

    try {
      // ✅ Option 1 (recommended): set VITE_CONTACT_ENDPOINT in .env (Formspree / your backend)
      const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined;

      if (endpoint) { 
        const res = await fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: form.name,
            email: form.email,
            phone: `${form.countryCode}${form.phone}`.replace(/\s+/g, ""), // FULL phone
            message: form.message,
            source: "popup",
            createdAt: new Date().toISOString(),

            // optional extras (if you want)
            countryCode: form.countryCode,
            phoneLocal: form.phone,
        }),
        });
        
 /*       const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...form,
            phoneFull: `${form.countryCode}${form.phone}`,
            source: "popup",
            createdAt: new Date().toISOString(),
          }),
        }); */

        if (!res.ok) throw new Error("Request failed");
      } else {
        // ✅ Option 2 (demo): no endpoint yet
        console.log("Popup form submitted:", {
          ...form,
          phoneFull: `${form.countryCode}${form.phone}`,
        });
      }

      setStatus("ok");
      try {
        localStorage.setItem(STORAGE_KEY, "1");
      } catch {}

      // close after success
      setTimeout(() => setOpen(false), 900);
    } catch {
      setStatus("err");
    } finally {
      setSubmitting(false);
    }
  }

  if (!open) return null;

  const modal = (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* overlay */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={close}
        aria-hidden="true"
      />

      {/* modal */}
      <div
        role="dialog"
        aria-modal="true"
        className="relative mx-4 w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl"
      >
        {/* close button */}
        <button
          onClick={close}
          className="absolute right-4 top-4 rounded-full p-2 hover:bg-gray-100"
          aria-label="Close"
          type="button"
        >
          ✕
        </button>

        <h2 className="text-center text-2xl font-bold">Contact us</h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          If your phone needs repairing, send a message and we’ll contact you regarding your enquiry.
        </p>

        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <input
            ref={nameRef}
            className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-500"
            placeholder="Name"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
          />

          <input
            className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-500"
            placeholder="Email"
            type="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
          />

          <div className="flex gap-3">
            <select
              className="w-32 rounded-xl border px-3 py-3 outline-none focus:border-blue-500"
              value={form.countryCode}
              onChange={(e) => update("countryCode", e.target.value)}
              aria-label="Country code"
            >
              <option value="+44">🇬🇧 +44</option>
              <option value="+1">🇺🇸 +1</option>
              <option value="+880">🇧🇩 +880</option>
              <option value="+971">🇦🇪 +971</option>
              <option value="+91">🇮🇳 +91</option>
            </select>

            <input
              className="flex-1 rounded-xl border px-4 py-3 outline-none focus:border-blue-500"
              placeholder="Phone"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
            />
          </div>

          <textarea
            className="h-28 w-full resize-none rounded-xl border px-4 py-3 outline-none focus:border-blue-500"
            placeholder="Message"
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
          />

          <button
            className="w-full rounded-xl bg-sky-500 px-4 py-3 font-semibold text-white hover:bg-sky-600 disabled:opacity-60"
            type="submit"
            disabled={submitting}
          >
            {submitting ? "Submitting..." : "Submit"}
          </button>

          {status === "ok" && (
            <p className="text-center text-sm text-green-600">
              Submitted successfully ✅
            </p>
          )}

          {status === "err" && (
            <p className="text-center text-sm text-red-600">
              Please fill all fields correctly.
            </p>
          )}

          <p className="pt-1 text-center text-xs text-gray-500">
            By submitting, you agree to be contacted regarding your enquiry.
          </p>
        </form>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}
