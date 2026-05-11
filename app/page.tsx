export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Invoice Intelligence
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Predict Churn from{" "}
          <span className="text-[#58a6ff]">Invoice Patterns</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Connect Stripe or Paddle and instantly surface which subscribers are about to leave — before they cancel. ML-powered churn scores from real billing data.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Start for $15 / mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required to connect. Cancel anytime.</p>

        {/* Feature pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-3 text-sm">
          {["Payment timing analysis", "Amount change detection", "Churn risk scores", "Retention insights", "Stripe & Paddle"].map((f) => (
            <span key={f} className="px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#8b949e]">{f}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center">
          <p className="text-sm text-[#58a6ff] uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$15</p>
          <p className="text-[#6e7681] mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#8b949e]">
            {[
              "Connect Stripe & Paddle",
              "ML churn risk scoring",
              "Payment behavior trends",
              "Actionable retention tips",
              "Unlimited subscribers",
              "Email alerts on high-risk accounts"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: "How does ChurnLens predict churn?",
              a: "We analyze invoice payment timing, partial payments, amount fluctuations, and billing interaction patterns using an ML scoring model trained on SaaS churn data."
            },
            {
              q: "Which billing platforms are supported?",
              a: "Currently Stripe and Paddle. You connect via API key — read-only access is all we need. More platforms are on the roadmap."
            },
            {
              q: "Is my billing data secure?",
              a: "Yes. We use read-only API tokens, never store raw payment data, and all connections are encrypted in transit and at rest."
            }
          ].map(({ q, a }) => (
            <div key={q} className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-sm text-[#8b949e]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center pb-10 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} ChurnLens. All rights reserved.
      </footer>
    </main>
  );
}
