import { motion } from "framer-motion";
import anastasiaHeadshot from "@/assets/anastasia-headshot.jpg";
import anastasiaBrand from "@/assets/anastasia-brand.png";

const CALENDLY_URL = "https://calendly.com/anastasiadobrovolschi/discoverycall";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0, 0, 0.2, 1] as const } }
} as const;

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } }
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 pb-20 pt-12 md:pt-20 md:pb-28">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            
            <div className="order-2 md:order-1">
              



              
              
              <motion.p
                variants={fadeIn}
                className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">TRANSFORMATIVE COACH


              </motion.p>
              <motion.h1
                variants={fadeIn}
                className="mb-6 text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                
                When everything looks fine on the outside…{" "}
                <em className="text-primary">but inside your mind never fully relaxes.</em>
              </motion.h1>
              <motion.p
                variants={fadeIn}
                className="mb-8 max-w-lg text-lg leading-relaxed text-muted-foreground md:text-xl">You’re responsible. Capable. Reliable.


But behind the scenes your mind keeps scanning for what could go wrong — and it’s exhausting.


I help high-functioning adults stop living in quiet internal tension and rediscover a sense of safety within themselves.</motion.p>
              <motion.a variants={fadeIn} href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg transition-all hover:shadow-xl hover:brightness-110">
                
                Book Your Discovery Call
              </motion.a>
            </div>

            <motion.div variants={fadeIn} className="order-1 md:order-2">
              <div className="relative mx-auto aspect-[3/4] max-w-md overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={anastasiaHeadshot}
                  alt="Anastasia Dobrovolschi, Transformative Leadership Coach"
                  className="h-full w-full object-cover"
                  loading="eager" />
                
              </div>
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* I See You */}
      <section className="bg-card py-20 md:py-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="mx-auto max-w-3xl px-6 text-center">
          
          <motion.h2
            variants={fadeIn}
            className="mb-8 text-3xl font-semibold md:text-4xl">
            
            I see you.
          </motion.h2>
          <motion.div variants={fadeIn} className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              You're the one everyone relies on. The one who keeps things running, who
              makes the hard calls, who shows up no matter what. From the outside,
              everything looks like it's working.
            </p>
            <p>
              But underneath? There's a weight you don't talk about. A background hum of
              anxiety that never quite goes away. The quiet exhaustion of holding it all
              together — while wondering if this is really how it's supposed to feel.
            </p>
            <p className="text-foreground font-medium">
              You don't need another strategy. You need to see something you haven't
              seen yet.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* The Shift */}
      <section className="py-20 md:py-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="mx-auto max-w-6xl px-6">
          
          <motion.div variants={fadeIn} className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
              The shift
            </h2>
            <p className="text-lg text-muted-foreground">
              This isn't about fixing yourself. It's about understanding how your
              experience is created — and watching everything change from there.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
            {
              title: "Clearer decisions",
              desc: "When your mind quiets down, you see what matters. Decisions stop feeling like pressure and start feeling obvious."
            },
            {
              title: "Lighter leadership",
              desc: "The weight you carry isn't part of the job — it's a misunderstanding. When that falls away, leading becomes natural again."
            },
            {
              title: "A spacious life",
              desc: "Beyond the roles and responsibilities, there's a quality of life that's been waiting for you. Calm, present, alive."
            }].
            map((card) =>
            <motion.div
              key={card.title}
              variants={fadeIn}
              className="rounded-2xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md">
              
                <h3 className="mb-3 text-xl font-semibold">{card.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{card.desc}</p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </section>

      {/* About */}
      <section className="bg-card py-20 md:py-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2 md:gap-16">
          
          <motion.div variants={fadeIn}>
            <div className="relative mx-auto aspect-square max-w-sm overflow-hidden rounded-2xl shadow-xl">
              <img
                src={anastasiaHeadshot}
                alt="Anastasia Dobrovolschi"
                className="h-full w-full object-cover"
                loading="lazy" />
              
            </div>
          </motion.div>
          <motion.div variants={fadeIn}>
            <h2 className="mb-6 text-3xl font-semibold md:text-4xl">
              About Anastasia
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                I've spent years working with leaders who look like they have it all
                figured out — and quietly feel like they're falling apart. I know that
                territory well, because I've lived it myself.
              </p>
              <p>
                What changed everything for me wasn't a new technique or a better
                strategy. It was a deeper understanding of how the human mind works —
                one that dissolves stress at its root, rather than managing it on the
                surface.
              </p>
              <p>
                Now I share that understanding with others. Not as a method, but as a
                conversation — one that meets you exactly where you are.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Client Transformations */}
      <section className="py-20 md:py-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="mx-auto max-w-4xl px-6">
          
          <motion.div variants={fadeIn} className="mb-14 text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Real Stories
            </p>
            <h2 className="text-3xl font-semibold md:text-4xl">
              Client Transformations
            </h2>
          </motion.div>

          {/* Salvador */}
          <motion.div variants={fadeIn} className="mb-6 text-center">
            <h3 className="text-xl font-semibold md:text-2xl">
              From 15 years of chronic anxiety to{" "}
              <em>"I am no longer anxious"</em>
            </h3>
          </motion.div>
          <motion.div
            variants={fadeIn}
            className="rounded-2xl border border-border bg-card p-8 shadow-sm md:p-12">
            
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <h4 className="mb-4 text-lg font-semibold text-primary">Before</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-muted-foreground/40" />
                    An entrepreneur paralysed by fear and chronic anxiety for over 15 years
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-muted-foreground/40" />
                    On 3 psychiatric medications for more than a decade
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-muted-foreground/40" />
                    Unable to be truly present for his family or his business
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="mb-4 text-lg font-semibold text-primary">After</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary/60" />
                    Anxiety-free for the first time in 15 years
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary/60" />
                    Clearer in business, emotionally independent and grounded
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary/60" />
                    Present with his family — truly, for the first time
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-10 rounded-xl bg-secondary/50 p-6 md:p-8">
              <blockquote className="text-center text-lg italic leading-relaxed md:text-xl">
                "After just 10 hours of coaching, I had my first 2 consecutive
                anxiety-free days in 15 years. Today, I can say — I am no longer
                anxious."
              </blockquote>
              <p className="mt-4 text-center text-sm font-medium text-muted-foreground">
                — Salvador, entrepreneur
              </p>
            </div>
          </motion.div>

          {/* Bianca */}
          <motion.div variants={fadeIn} className="mb-6 mt-14 text-center">
            <h3 className="text-xl font-semibold md:text-2xl">
              From self-doubt and constant overthinking to{" "}
              <em>presence and inner power</em>
            </h3>
          </motion.div>
          <motion.div
            variants={fadeIn}
            className="rounded-2xl border border-border bg-card p-8 shadow-sm md:p-12">
            
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <h4 className="mb-4 text-lg font-semibold text-primary">Before</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-muted-foreground/40" />
                    Lingering job insecurity and financial anxiety
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-muted-foreground/40" />
                    Procrastination driven by self-judgment
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-muted-foreground/40" />
                    Social anxiety and fear of not being "enough"
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="mb-4 text-lg font-semibold text-primary">After</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary/60" />
                    Catches anxious thoughts and returns to presence within moments
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary/60" />
                    Acts from clarity instead of guilt or fear
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary/60" />
                    Feels "enough" without external validation
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-10 rounded-xl bg-secondary/50 p-6 md:p-8">
              <blockquote className="text-center text-lg italic leading-relaxed md:text-xl">
                "We can ruin our own state ourselves." — recognising that while
                she cannot control the future, she has total power to choose her
                experience of the present.
              </blockquote>
              <p className="mt-4 text-center text-sm font-medium text-muted-foreground">
                — Bianca, front-end developer
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 3-Step Process */}
      <section className="bg-card py-20 md:py-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="mx-auto max-w-4xl px-6">
          
          <motion.h2
            variants={fadeIn}
            className="mb-14 text-center text-3xl font-semibold md:text-4xl">
            
            How it works
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
            { step: "01", title: "Book a free discovery call", desc: "A relaxed, no-pressure conversation to explore whether this is the right fit." },
            { step: "02", title: "We explore what's really going on", desc: "Together we look beneath the surface — not at your problems, but at how your experience is being created." },
            { step: "03", title: "You find your way back to clarity", desc: "As understanding deepens, the noise falls away. What's left is you — clear, calm, and capable." }].
            map((item) =>
            <motion.div key={item.step} variants={fadeIn} className="text-center">
                <span className="mb-4 inline-block text-4xl font-bold text-primary/30">
                  {item.step}
                </span>
                <h3 className="mb-3 text-lg font-semibold">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="mx-auto max-w-2xl px-6 text-center">
          
          <motion.h2
            variants={fadeIn}
            className="mb-6 text-3xl font-semibold md:text-4xl">
            
            You don't need to carry it all alone.
          </motion.h2>
          <motion.p variants={fadeIn} className="mb-8 text-lg text-muted-foreground">
            If something here resonated, let's have a conversation. No agenda, no
            pressure — just a chance to explore what's possible.
          </motion.p>
          <motion.a
            variants={fadeIn}
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-primary px-10 py-4 text-lg font-semibold text-primary-foreground shadow-lg transition-all hover:shadow-xl hover:brightness-110">
            
            Book Your Free Discovery Call
          </motion.a>
          <motion.p variants={fadeIn} className="mt-4 text-sm text-muted-foreground">
            No pressure. Just a conversation.
          </motion.p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10">
        <div className="mx-auto max-w-6xl px-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Anastasia Dobrovolschi. All rights reserved.</p>
        </div>
      </footer>
    </div>);

};

export default Index;