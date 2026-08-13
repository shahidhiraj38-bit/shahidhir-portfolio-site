export function ContactForm() {
  return (
    <form action="https://formsubmit.co/shahidhiraj38@gmail.com" method="POST" className="rounded-lg premium-border p-6 shadow-card">
      <input type="hidden" name="_subject" value="New consultation request from shahidhir website" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_next" value="/thanks" />
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyanGlow">Book Consultation</p>
        <h2 className="mt-3 text-2xl font-bold text-white md:text-3xl">Start your AI growth plan</h2>
        <p className="mt-3 text-sm leading-7 text-white/62">
          Submit your details below. Your consultation request will be sent directly to shahidhiraj38@gmail.com.
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="text-sm font-medium text-white/70">Name<input required name="name" className="mt-2 w-full rounded-md border border-white/10 bg-ink px-4 py-3 text-white outline-none transition focus:border-cyanGlow" /></label>
        <label className="text-sm font-medium text-white/70">Email<input required type="email" name="email" className="mt-2 w-full rounded-md border border-white/10 bg-ink px-4 py-3 text-white outline-none transition focus:border-cyanGlow" /></label>
        <label className="text-sm font-medium text-white/70">Phone<input name="phone" className="mt-2 w-full rounded-md border border-white/10 bg-ink px-4 py-3 text-white outline-none transition focus:border-cyanGlow" /></label>
        <label className="text-sm font-medium text-white/70">Service Interest<select name="service_interest" className="mt-2 w-full rounded-md border border-white/10 bg-ink px-4 py-3 text-white outline-none transition focus:border-cyanGlow">
          <option>AI Marketing Strategy</option>
          <option>Business Growth Consulting</option>
          <option>Social Media Marketing</option>
          <option>Personal Branding</option>
          <option>Sales Funnel Strategy</option>
          <option>Mindset and Motivation Coaching</option>
          <option>Digital Transformation Consulting</option>
        </select></label>
      </div>
      <label className="mt-5 block text-sm font-medium text-white/70">Message<textarea required name="message" rows={6} className="mt-2 w-full rounded-md border border-white/10 bg-ink px-4 py-3 text-white outline-none transition focus:border-cyanGlow" /></label>
      <button type="submit" className="mt-6 w-full rounded-md bg-cyanGlow px-6 py-4 font-bold text-ink shadow-glow transition hover:bg-limeGlow md:w-auto">
        Book Consultation
      </button>
    </form>
  );
}
