// app/routes/home.tsx
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  const title =
    "Dragon Typing | Fast Typing Word Game with Running and Flying Dragons";
  const description =
    "Dragon Typing is a fast browser typing game. Type the right words to run, take off, and fly. Mistakes cause your dragon to land and stumble. Play timed modes or unlimited practice.";
  const url = "https://dragontyping.com/";
  const image = "https://dragontyping.com/og-image.jpg"; // replace when ready

  return [
    { title },
    { name: "description", content: description },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "robots", content: "index,follow,max-image-preview:large" },

    // Open Graph
    { property: "og:type", content: "website" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:image", content: image },

    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },

    // Canonical
    { tagName: "link", rel: "canonical", href: url },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return {
    message: context.VALUE_FROM_EXPRESS,
    nextUpdateHint: "Typing curriculum and difficulty tiers arriving soon",
    launchWindow: "Fall 2025",
  };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const { message, nextUpdateHint, launchWindow } = loaderData;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "Dragon Typing",
        url: "https://dragontyping.com/",
        description:
          "Dragon Typing is a fast browser typing game. Type the right words to run, take off, and fly. Mistakes cause your dragon to land and stumble. Play timed modes or unlimited practice. Track progress, improve skills, and enjoy a fun dragon-themed experience for all ages.",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://dragontyping.com/?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "VideoGame",
        name: "Dragon Typing",
        url: "https://dragontyping.com/",
        playMode: "SinglePlayer",
        applicationCategory: "Game",
        operatingSystem: "Web",
        genre: ["Typing", "Word Game", "Action"],
        description:
          "Type the correct words to power a dragon that runs, takes off, and flies. Too many errors force a landing and a stumble. Includes timed and unlimited modes, skill building, progress tracking, and educational features.",
        gameLocation: "Online",
        educationalUse: [
          "Typing practice for kids and adults",
          "Classroom and home learning",
          "Skill building and curriculum",
        ],
        audience: [
          "Beginners",
          "Kids",
          "Advanced typists",
          "Families",
          "Schools",
        ],
        features: [
          "Timed sprints (30, 60, 120 seconds)",
          "Unlimited mode",
          "Custom word lists",
          "Progress tracking",
          "Accessibility options",
          "Multilingual support",
          "Typing tests and certification",
          "Family and group play",
          "Daily streaks",
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is Dragon Typing?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Dragon Typing is a fast browser typing game. Correct words give speed, altitude, and score. Mistakes reduce stamina and can cause a landing or a trip. It is designed for fun, skill building, and progress tracking.",
            },
          },
          {
            "@type": "Question",
            name: "Is there a timed mode?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Choose 30, 60, or 120 second sprints. Unlimited mode is available for free practice.",
            },
          },
          {
            "@type": "Question",
            name: "Does it work on mobile and desktop?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. External keyboards are recommended for best results. The interface supports touch input and on-screen keyboards.",
            },
          },
          {
            "@type": "Question",
            name: "Can I pick difficulty?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Choose beginner, intermediate, or advanced lists. Adaptive mode can scale difficulty based on recent accuracy.",
            },
          },
          {
            "@type": "Question",
            name: "Do I need an account?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No account is required for core play. Local storage can keep your recent results on your device.",
            },
          },
          {
            "@type": "Question",
            name: "Is Dragon Typing suitable for kids?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. The game includes kid-friendly vocabulary, visual feedback, and a safe, distraction-free environment for learning.",
            },
          },
          {
            "@type": "Question",
            name: "Does Dragon Typing support multiple languages?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Word lists can be adapted for different languages and regional spelling variants.",
            },
          },
          {
            "@type": "Question",
            name: "How is progress tracked?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Each session reports words per minute, accuracy, flight time, error types, and best streak. Progress is tracked locally.",
            },
          },
          {
            "@type": "Question",
            name: "Can I use Dragon Typing for group play?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Families and classrooms can use group challenges and races for fun and motivation.",
            },
          },
          {
            "@type": "Question",
            name: "What are the main benefits?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Dragon Typing improves typing speed, accuracy, rhythm, and cognitive skills. It is engaging for all ages and skill levels.",
            },
          },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Notice */}
      <div className="w-full bg-red-600 text-white">
        <div className="mx-auto max-w-6xl px-4 py-2 text-center text-sm">
          {nextUpdateHint}. Planned window: {launchWindow}.
        </div>
      </div>

      {/* Hero */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-14">
        <div className="space-y-6">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Type fast. Feed your dragon. Run, take off, and fly.
          </h1>
          <p className="text-lg text-zinc-700">
            Dragon Typing blends a satisfying typing word game with an action
            run and fly loop. Correct words increase speed and altitude. Too
            many errors force a landing and, if you keep missing, a trip.
          </p>
          <ul className="list-disc space-y-2 pl-6 text-zinc-800">
            <li>Timed sprints for 30, 60, or 120 seconds</li>
            <li>Unlimited mode for relaxed practice</li>
            <li>Adaptive difficulty that scales with accuracy</li>
            <li>Clean results with words per minute and accuracy</li>
          </ul>

          {/* CTA placeholders without links */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              type="button"
              className="inline-flex items-center rounded-xl bg-red-600 px-5 py-3 text-white shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Start a 60 second run
            </button>
            <button
              type="button"
              className="inline-flex items-center rounded-xl border border-zinc-300 px-5 py-3 text-zinc-800 hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-400"
            >
              Practice in unlimited mode
            </button>
          </div>

          <p className="sr-only">
            Dragon Typing is a free browser typing game with modes for timed
            play and unlimited practice.
          </p>
        </div>
      </section>

      {/* How to Play */}
      <section id="how-to-play" className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="text-2xl font-bold">How to play Dragon Typing</h2>
        <p className="mt-3 text-zinc-700">
          Type the prompted words with accuracy. Each correct word adds speed
          and lifts the dragon from a run to a glide, then to a full flight.
          Misses remove stamina. Too many wrong words cause a forced landing and
          a trip animation.
        </p>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          <article className="rounded-2xl border border-zinc-200 p-5 shadow-sm">
            <h3 className="font-semibold">Run</h3>
            <p className="mt-2 text-zinc-700">
              Accurate typing on easy words builds momentum on the ground.
            </p>
          </article>
          <article className="rounded-2xl border border-zinc-200 p-5 shadow-sm">
            <h3 className="font-semibold">Glide and fly</h3>
            <p className="mt-2 text-zinc-700">
              Sustained accuracy gives altitude. Keep a clean streak to maintain
              flight.
            </p>
          </article>
          <article className="rounded-2xl border border-zinc-200 p-5 shadow-sm">
            <h3 className="font-semibold">Land and trip</h3>
            <p className="mt-2 text-zinc-700">
              A string of errors drains stamina. Land safely or trip if misses
              stack up.
            </p>
          </article>
        </div>
        <p className="mt-4 text-sm text-zinc-600">
          Keywords: typing word game, dragon typing practice, browser typing
          test, accuracy based speed, fly on correct words.
        </p>
      </section>

      {/* Modes */}
      <section id="modes" className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="text-2xl font-bold">Game modes</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              h: "Timed 60",
              p: "A focused 60 second sprint with words per minute, accuracy, and longest flight streak.",
            },
            {
              h: "Timed 120",
              p: "Double distance with fatigue tuning. Pace yourself to avoid forced landings.",
            },
            {
              h: "Unlimited",
              p: "Practice without a clock. Build steady accuracy and long flights.",
            },
            {
              h: "Hard words",
              p: "Higher difficulty with trickier letter patterns and mixed length tokens.",
            },
            {
              h: "Beginner words",
              p: "Friendly set with common letters that still reward clean rhythm.",
            },
            {
              h: "Custom lists",
              p: "Import or select topic lists for focused training sessions.",
            },
          ].map((f) => (
            <article
              key={f.h}
              className="rounded-2xl border border-zinc-200 p-5 shadow-sm"
            >
              <h3 className="font-semibold">{f.h}</h3>
              <p className="mt-2 text-zinc-700">{f.p}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Results */}
      <section id="results" className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="text-2xl font-bold">Results and progress</h2>
        <p className="mt-3 text-zinc-700">
          Each session reports words per minute, raw keystrokes, accuracy,
          flight time, and best streak. Use the trends to pick the right
          difficulty and watch your typing improve.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-800">
          <li>WPM, accuracy, and error map</li>
          <li>Flight time and altitude multiplier</li>
          <li>Longest clean streak without a miss</li>
          <li>Optional local history for progress tracking</li>
        </ul>
      </section>

      {/* Skill Building */}
      <section id="skill-building" className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="text-2xl font-bold">Skill building and curriculum</h2>
        <p className="mt-3 text-zinc-700">
          Dragon Typing teaches rhythm, accuracy, and pattern recognition. Word
          lists progress from common letters to advanced blends and rare tokens.
          Clean input timing improves control during fast flights.
        </p>
        <div className="mt-4 grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl border border-zinc-200 p-5 shadow-sm">
            <h3 className="font-semibold">Foundations</h3>
            <p className="mt-2 text-zinc-700">
              Home row comfort, basic words, and steady pacing.
            </p>
          </article>
          <article className="rounded-2xl border border-zinc-200 p-5 shadow-sm">
            <h3 className="font-semibold">Intermediate</h3>
            <p className="mt-2 text-zinc-700">
              Blends, digraphs, and mixed length tokens that test accuracy.
            </p>
          </article>
          <article className="rounded-2xl border border-zinc-200 p-5 shadow-sm">
            <h3 className="font-semibold">Advanced</h3>
            <p className="mt-2 text-zinc-700">
              Rare letters, speed pushes, and error recovery under pressure.
            </p>
          </article>
        </div>
        <p className="mt-4 text-sm text-zinc-600">
          Keywords: typing practice game, improve WPM, accuracy training, word
          lists, home row drills.
        </p>
      </section>

      {/* Accessibility and Performance */}
      <section
        id="accessibility-performance"
        className="mx-auto max-w-6xl px-4 pb-12"
      >
        <h2 className="text-2xl font-bold">Accessibility and performance</h2>
        <p className="mt-3 text-zinc-700">
          The interface favors readable text, keyboard friendly focus states,
          and smooth frame pacing. Works on desktop and mobile. External
          keyboards on tablets give the best control for flights.
        </p>
        <div className="mt-4 grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl border border-zinc-200 p-5 shadow-sm">
            <h3 className="font-semibold">Readable UI</h3>
            <p className="mt-2 text-zinc-700">
              Strong contrast and clear status messages for hits and misses.
            </p>
          </article>
          <article className="rounded-2xl border border-zinc-200 p-5 shadow-sm">
            <h3 className="font-semibold">Fast input</h3>
            <p className="mt-2 text-zinc-700">
              Low latency key handling that keeps rhythm smooth at speed.
            </p>
          </article>
          <article className="rounded-2xl border border-zinc-200 p-5 shadow-sm">
            <h3 className="font-semibold">Data light</h3>
            <p className="mt-2 text-zinc-700">
              Lightweight assets and offline friendly behavior after first load.
            </p>
          </article>
        </div>
      </section>

      {/* ===================== Typing Skills and Benefits ===================== */}
      <section id="typing-benefits" className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="text-2xl font-bold">Typing skills and benefits</h2>
        <p className="mt-3 text-zinc-700">
          Dragon Typing is more than a game. It improves words per minute,
          builds accuracy, and strengthens rhythm on a keyboard. By tying
          progress to a dragon’s run and flight, every correct word feels
          rewarding. It is a fun way to practice typing online while gaining
          measurable results.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-800">
          <li>Boost your words per minute with timed typing challenges</li>
          <li>Improve accuracy and reduce common mistakes</li>
          <li>Strengthen hand–eye coordination and typing rhythm</li>
          <li>Track progress through flight streaks and performance stats</li>
        </ul>
        <p className="mt-4 text-sm text-zinc-600">
          Keywords: typing skills, typing practice game, improve WPM online,
          accuracy training.
        </p>
      </section>

      {/* ===================== Educational Use ===================== */}
      <section id="educational-use" className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="text-2xl font-bold">Educational use</h2>
        <p className="mt-3 text-zinc-700">
          Dragon Typing works well in classrooms, typing labs, and at home.
          Students stay engaged because their dragon only flies when they type
          correctly. The feedback loop encourages focus, accuracy, and
          consistent practice without feeling like homework.
        </p>
        <div className="mt-4 grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl border border-zinc-200 p-5 shadow-sm">
            <h3 className="font-semibold">For beginners</h3>
            <p className="mt-2 text-zinc-700">
              Simple words and slow pace help new typists gain confidence.
            </p>
          </article>
          <article className="rounded-2xl border border-zinc-200 p-5 shadow-sm">
            <h3 className="font-semibold">For kids</h3>
            <p className="mt-2 text-zinc-700">
              The dragon theme keeps practice fun while reinforcing correct
              spelling.
            </p>
          </article>
          <article className="rounded-2xl border border-zinc-200 p-5 shadow-sm">
            <h3 className="font-semibold">For advanced learners</h3>
            <p className="mt-2 text-zinc-700">
              Hard word lists and timed runs push experienced players to new
              speeds.
            </p>
          </article>
        </div>
        <p className="mt-4 text-sm text-zinc-600">
          Keywords: typing for kids, typing game for school, classroom typing
          practice, dragon typing lessons.
        </p>
      </section>

      {/* ===================== Typing Challenges and Leaderboards ===================== */}
      <section id="typing-challenges" className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="text-2xl font-bold">
          Typing challenges and competitions
        </h2>
        <p className="mt-3 text-zinc-700">
          Timed modes create competitive energy. Race to keep your dragon in
          flight, post your best words per minute, and compare streaks. Players
          can focus on personal bests or community challenges to test their
          skills against others worldwide.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-800">
          <li>30, 60, and 120 second sprint modes</li>
          <li>Unlimited endurance typing mode</li>
          <li>Accuracy streak challenges for advanced players</li>
          <li>Friendly competition to improve results day by day</li>
        </ul>
        <p className="mt-4 text-sm text-zinc-600">
          Keywords: timed typing test, typing challenges online, typing
          competitions, improve words per minute.
        </p>
      </section>

      {/* ===================== Fun Theme and Motivation ===================== */}
      <section id="dragon-theme" className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="text-2xl font-bold">Fun theme and motivation</h2>
        <p className="mt-3 text-zinc-700">
          The dragon is more than a mascot. It is a visual reward system. Smooth
          typing keeps your dragon flying high and fast. Mistakes cause the
          dragon to lose altitude until it lands or trips. This cycle motivates
          players to type carefully, stay accurate, and push toward mastery.
        </p>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-zinc-200 p-5 shadow-sm">
            <h3 className="font-semibold">Positive reinforcement</h3>
            <p className="mt-2 text-zinc-700">
              Correct words give immediate visual feedback as the dragon soars.
            </p>
          </article>
          <article className="rounded-2xl border border-zinc-200 p-5 shadow-sm">
            <h3 className="font-semibold">Engaging gameplay</h3>
            <p className="mt-2 text-zinc-700">
              Combines typing drills with action game mechanics to hold
              attention.
            </p>
          </article>
        </div>
        <p className="mt-4 text-sm text-zinc-600">
          Keywords: fun typing game, dragon typing challenge, typing motivation,
          gamified typing practice.
        </p>
      </section>

      {/* ===================== Accuracy vs Speed ===================== */}
      <section id="accuracy-speed" className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="text-2xl font-bold">Accuracy versus speed</h2>
        <p className="mt-3 text-zinc-700">
          Dragon Typing rewards balance. Speed without accuracy causes the
          dragon to stumble, while careful precise typing extends flight time.
          Players learn to value accuracy first, then layer speed on top to
          achieve higher scores and longer streaks.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-800">
          <li>Accuracy determines altitude and flight stability</li>
          <li>Speed improves score and distance traveled</li>
          <li>Balanced typing habits create consistent improvement</li>
        </ul>
        <p className="mt-4 text-sm text-zinc-600">
          Keywords: typing accuracy drills, speed typing practice, balance
          accuracy and speed, online typing game.
        </p>
      </section>

      {/* ===================== Typing Progress Tracking ===================== */}
      <section id="progress-tracking" className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="text-2xl font-bold">
          Progress tracking and improvement
        </h2>
        <p className="mt-3 text-zinc-700">
          Every run generates stats that help players grow. Words per minute,
          accuracy percentage, error types, and longest flight streak are
          displayed at the end of each session. Over time, these results
          highlight improvement and motivate continued practice.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-800">
          <li>Detailed session summaries with WPM and accuracy</li>
          <li>Graph trends that reveal typing improvement</li>
          <li>Error analysis to reduce repeated mistakes</li>
          <li>Encouragement through dragon performance milestones</li>
        </ul>
        <p className="mt-4 text-sm text-zinc-600">
          Keywords: typing progress tracking, typing stats, measure improvement,
          dragon typing milestones.
        </p>
      </section>

      {/* ===================== Typing for Kids ===================== */}
      <section id="typing-for-kids" className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="text-2xl font-bold">Typing for kids</h2>
        <p className="mt-3 text-zinc-700">
          Dragon Typing is built to keep young learners engaged. The dragon’s
          flight path, visual rewards, and simple word lists make it easier for
          children to practice typing skills without losing focus. Bright
          feedback helps them stay motivated while building essential keyboard
          habits.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-800">
          <li>Kid-friendly vocabulary with common, short words</li>
          <li>Visual feedback that rewards accuracy instantly</li>
          <li>Safe, distraction-free environment for learning</li>
          <li>Encourages daily practice through fun repetition</li>
        </ul>
        <p className="mt-4 text-sm text-zinc-600">
          Keywords: typing game for kids, fun typing practice, dragon typing for
          children, keyboard learning game.
        </p>
      </section>

      {/* ===================== Advanced Typist Training ===================== */}
      <section id="advanced-training" className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="text-2xl font-bold">Advanced typist training</h2>
        <p className="mt-3 text-zinc-700">
          For experienced players, Dragon Typing introduces harder word lists,
          rare letters, and fast-paced sequences. These advanced drills push
          accuracy and speed together, forcing typists to adapt quickly and
          sustain flight even under challenging conditions.
        </p>
        <div className="mt-4 grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl border border-zinc-200 p-5 shadow-sm">
            <h3 className="font-semibold">Rare letters</h3>
            <p className="mt-2 text-zinc-700">
              Practice J, Q, X, and Z to strengthen accuracy with uncommon
              words.
            </p>
          </article>
          <article className="rounded-2xl border border-zinc-200 p-5 shadow-sm">
            <h3 className="font-semibold">Long words</h3>
            <p className="mt-2 text-zinc-700">
              Test focus with multi-syllable challenges while keeping flight
              steady.
            </p>
          </article>
          <article className="rounded-2xl border border-zinc-200 p-5 shadow-sm">
            <h3 className="font-semibold">Speed bursts</h3>
            <p className="mt-2 text-zinc-700">
              Timed speed ramps encourage sharper reactions and rhythm control.
            </p>
          </article>
        </div>
        <p className="mt-4 text-sm text-zinc-600">
          Keywords: advanced typing practice, speed typing drills, dragon typing
          challenge, hard typing words.
        </p>
      </section>

      {/* ===================== Multilingual Support ===================== */}
      <section
        id="multilingual-support"
        className="mx-auto max-w-6xl px-4 pb-12"
      >
        <h2 className="text-2xl font-bold">Multilingual support</h2>
        <p className="mt-3 text-zinc-700">
          Dragon Typing can adapt word lists to different languages. This allows
          players around the world to improve typing accuracy in English,
          Spanish, French, and more. Regional spelling options keep daily
          practice fair and consistent.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-800">
          <li>Support for multiple alphabets and word lists</li>
          <li>Regional spelling variants for fair play</li>
          <li>Practice typing in your preferred language</li>
        </ul>
        <p className="mt-4 text-sm text-zinc-600">
          Keywords: multilingual typing game, type in Spanish, French typing
          practice, dragon typing in multiple languages.
        </p>
      </section>

      {/* ===================== Typing Tests and Certification ===================== */}
      <section id="typing-tests" className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="text-2xl font-bold">Typing tests and certification</h2>
        <p className="mt-3 text-zinc-700">
          Use Dragon Typing as both a fun game and a formal typing test. Timed
          modes measure words per minute, accuracy percentage, and consistency.
          Results can be used to demonstrate progress for school, work, or
          personal goals.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-800">
          <li>30, 60, and 120 second typing tests</li>
          <li>Clear scorecards with WPM and error breakdowns</li>
          <li>Optional printable certificates of progress</li>
        </ul>
        <p className="mt-4 text-sm text-zinc-600">
          Keywords: online typing test, typing certification, measure WPM,
          dragon typing scorecards.
        </p>
      </section>

      {/* ===================== Cognitive and Learning Benefits ===================== */}
      <section id="cognitive-benefits" className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="text-2xl font-bold">Cognitive and learning benefits</h2>
        <p className="mt-3 text-zinc-700">
          Typing games improve memory, pattern recognition, and focus. Dragon
          Typing keeps the brain active by requiring quick word recognition,
          fast finger movement, and multitasking between accuracy and speed. The
          result is sharper cognitive performance over time.
        </p>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-zinc-200 p-5 shadow-sm">
            <h3 className="font-semibold">Pattern recognition</h3>
            <p className="mt-2 text-zinc-700">
              Frequent exposure to letter patterns improves spelling intuition.
            </p>
          </article>
          <article className="rounded-2xl border border-zinc-200 p-5 shadow-sm">
            <h3 className="font-semibold">Focus training</h3>
            <p className="mt-2 text-zinc-700">
              Switching between speed and accuracy builds concentration skills.
            </p>
          </article>
        </div>
        <p className="mt-4 text-sm text-zinc-600">
          Keywords: cognitive benefits of typing, brain training typing game,
          memory and focus, dragon typing practice.
        </p>
      </section>

      {/* ===================== Family and Group Play ===================== */}
      <section id="family-play" className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="text-2xl font-bold">Family and group play</h2>
        <p className="mt-3 text-zinc-700">
          Dragon Typing can be played solo or in group settings. Families can
          practice together by taking turns, and classrooms can use group
          challenges to motivate students. Watching the dragon respond to typing
          accuracy adds excitement to shared play.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-800">
          <li>Family typing nights with fun dragon races</li>
          <li>Group challenges in classrooms for healthy competition</li>
          <li>Encourages teamwork and shared progress tracking</li>
        </ul>
        <p className="mt-4 text-sm text-zinc-600">
          Keywords: family typing game, group typing practice, dragon typing in
          classroom, fun multiplayer typing ideas.
        </p>
      </section>

      {/* ===================== Typing Habits and Daily Routine ===================== */}
      <section id="typing-habits" className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="text-2xl font-bold">Typing habits and daily routine</h2>
        <p className="mt-3 text-zinc-700">
          Short, regular practice sessions are the best way to build typing
          speed. Dragon Typing encourages daily repetition by making each run
          unique. Over time, these quick sessions develop into strong typing
          habits that last a lifetime.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-800">
          <li>Daily streaks to keep motivation high</li>
          <li>Warm-up runs before work or school</li>
          <li>Small sessions add up to noticeable improvement</li>
        </ul>
        <p className="mt-4 text-sm text-zinc-600">
          Keywords: daily typing routine, typing habits, practice every day,
          dragon typing streaks.
        </p>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-6xl px-4 pb-16">
        <h2 className="text-2xl font-bold">FAQ</h2>

        <details className="group mt-4 rounded-xl border border-zinc-200 p-4">
          <summary className="cursor-pointer select-none font-medium">
            How does scoring work?
          </summary>
          <p className="mt-2 text-zinc-700">
            Score comes from words per minute, accuracy, and flight multipliers.
            Clean streaks increase the multiplier. Errors reduce stamina and can
            end a run.
          </p>
        </details>

        <details className="group mt-3 rounded-xl border border-zinc-200 p-4">
          <summary className="cursor-pointer select-none font-medium">
            Can I pick difficulty?
          </summary>
          <p className="mt-2 text-zinc-700">
            Yes. Choose beginner, intermediate, or advanced lists. Adaptive mode
            can scale difficulty based on recent accuracy.
          </p>
        </details>

        <details className="group mt-3 rounded-xl border border-zinc-200 p-4">
          <summary className="cursor-pointer select-none font-medium">
            Do I need an account?
          </summary>
          <p className="mt-2 text-zinc-700">
            No account is required for core play. Local storage can keep your
            recent results on your device.
          </p>
        </details>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-6xl px-4 py-10 text-sm text-zinc-600">
        <p>© {new Date().getFullYear()} Dragon Typing</p>
        {message ? (
          <p className="mt-2 text-zinc-500">Server says: {message}</p>
        ) : null}
      </footer>
    </main>
  );
}
