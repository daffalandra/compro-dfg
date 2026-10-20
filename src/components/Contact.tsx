import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { contact } from "../data/content";
import { pick, useLanguage } from "../i18n/LanguageContext";
import { easeApple, headerVariants, viewportOnce } from "../lib/motion";

export default function Contact() {
  const { lang } = useLanguage();

  return (
    <section id="contact" className="bg-zinc-50 px-6 py-32 md:py-40">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left: copy */}
          <motion.div
            variants={headerVariants}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-accent-600">
              {pick(lang, contact.eyebrow)}
            </span>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl">
              {pick(lang, contact.heading)}
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-zinc-500">
              {pick(lang, contact.description)}
            </p>

            <a
              href={`mailto:${contact.email}`}
              className="mt-8 inline-flex items-center gap-2.5 text-sm font-medium text-zinc-900 transition-colors hover:text-accent-600"
            >
              <Mail className="h-4 w-4" strokeWidth={1.5} />
              {contact.email}
            </a>

            <p className="mt-8 max-w-md text-sm leading-relaxed text-zinc-400">
              {pick(lang, contact.disabledNote)}{" "}
              <a
                href={`mailto:${contact.email}`}
                className="font-medium text-zinc-700 underline-offset-4 hover:underline"
              >
                {contact.email}
              </a>
              .
            </p>
          </motion.div>

          {/* Right: static placeholder form */}
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, ease: easeApple, delay: 0.1 }}
            onSubmit={(event) => event.preventDefault()}
            className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-[0_24px_64px_rgba(0,0,0,0.05)] md:p-10"
          >
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-medium text-zinc-700"
                >
                  {pick(lang, contact.nameLabel)}
                </label>
                <input
                  id="contact-name"
                  type="text"
                  autoComplete="name"
                  placeholder={pick(lang, contact.namePlaceholder)}
                  className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-medium text-zinc-700"
                >
                  {pick(lang, contact.companyLabel)}
                </label>
                <input
                  id="contact-email"
                  type="email"
                  autoComplete="email"
                  placeholder={pick(lang, contact.companyPlaceholder)}
                  className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium text-zinc-700"
                >
                  {pick(lang, contact.messageLabel)}
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  placeholder={pick(lang, contact.messagePlaceholder)}
                  className="w-full resize-none rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20"
                />
              </div>

              <button
                type="submit"
                disabled
                title={pick(lang, contact.disabledNote)}
                className="w-full cursor-not-allowed rounded-full bg-zinc-900 px-7 py-3.5 text-sm font-medium text-white opacity-40"
              >
                {pick(lang, contact.submitLabel)}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
