import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Privacy Policy — ${siteConfig.name}`,
  description:
    "How the Budget Buddy financial-literacy app handles your data. No ads, no analytics, no tracking.",
};

export default function PolicyPage() {
  return (
    <section className="bg-bg px-6 py-16 sm:px-10">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl">
          Budget Buddy — Privacy Policy
        </h1>
        <p className="mt-3 text-sm font-semibold text-muted">
          Last updated: 1 September 2026
        </p>

        <p className="mt-6 leading-relaxed text-body">
          Budget Buddy is a financial-literacy game for ages 4 and up. This
          policy explains exactly what the app collects, where it goes, and
          what it never does.
        </p>
        <p className="mt-4 leading-relaxed text-body">
          It was written by reading the app&rsquo;s own source code rather
          than from a template, so everything below describes behaviour that
          is actually in the build. Where something is optional, it says so;
          where a third party receives anything, it names them.
        </p>

        <blockquote className="mt-6 rounded-r-lg border-l-4 border-accent bg-bg-alt px-5 py-4 text-muted">
          <p>
            <strong className="text-ink">Not yet legal advice.</strong> This
            is an accurate technical description written by the development
            team. Before publishing it as your store-listing policy, have
            someone qualified review it — particularly the
            children&rsquo;s-privacy section, because an app aimed partly at
            under-13s in the US falls under COPPA, and in the EU/UK under
            GDPR-K and the Age Appropriate Design Code. Those regimes may
            require a verifiable parental-consent step this app does not
            currently have.
          </p>
        </blockquote>

        <hr className="my-10 border-border" />

        <h2 className="font-display text-xl font-bold text-ink">
          The short version
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-body">
          <li>
            Budget Buddy needs an account, so that your progress follows you
            between devices. We store your email, a username, your game
            progress, and anything else you choose to add.
          </li>
          <li>
            There is <strong className="text-ink">no advertising, no
            analytics SDK, no crash reporting, no tracking, and no
            advertising identifier</strong> in this app. We do not sell or
            share your data with anyone for marketing.
          </li>
          <li>
            No real money is ever involved. Every &ldquo;coin&rdquo;,
            &ldquo;$&rdquo; and &ldquo;portfolio&rdquo; in the app is
            fictional.
          </li>
          <li>
            Accounts that say they belong to someone{" "}
            <strong className="text-ink">
              under 13 never appear on the public leaderboard
            </strong>{" "}
            — that is a default, not a setting you have to find.
          </li>
        </ul>

        <hr className="my-10 border-border" />

        <h2 className="font-display text-xl font-bold text-ink">
          What we collect
        </h2>

        <h3 className="mt-6 font-display text-lg font-semibold text-accent">
          When you create an account
        </h3>
        <p className="mt-2 leading-relaxed text-body">
          An account is required to play. Progress is saved to it so it is
          not lost when you change device, and the leaderboard needs
          something to attach a score to.
        </p>

        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border-b border-border py-2 pr-4 text-left font-semibold text-muted">
                  What
                </th>
                <th className="border-b border-border py-2 pr-4 text-left font-semibold text-muted">
                  Why
                </th>
                <th className="border-b border-border py-2 text-left font-semibold text-muted">
                  Required?
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Email address", "Signing in, and resetting your password", "Yes"],
                ["Password", "Signing in", "Yes"],
                ["Username", "Shown on the leaderboard and your profile", "Yes"],
                ["Profile photo", "Shown on your profile", "No"],
                ["Age band", "Picks age-appropriate lessons and examples", "No"],
                ["Gender / pronoun", "Your character in the life simulation", "No"],
              ].map(([what, why, required]) => (
                <tr key={what}>
                  <td className="border-b border-border py-2 pr-4 text-body">
                    {what}
                  </td>
                  <td className="border-b border-border py-2 pr-4 text-body">
                    {why}
                  </td>
                  <td className="border-b border-border py-2 text-body">
                    {required}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 leading-relaxed text-body">
          Your password is handled by our authentication provider (Supabase)
          and is stored hashed. The app never sees or stores your password
          itself.
        </p>
        <p className="mt-4 leading-relaxed text-body">
          <strong className="text-ink">Age is a band, not a birthday.</strong>{" "}
          You pick one of &ldquo;under 13&rdquo;, &ldquo;13–15&rdquo;,
          &ldquo;16–17&rdquo;, &ldquo;18+&rdquo; or &ldquo;prefer not to
          say&rdquo;. We never ask for a date of birth, because the app only
          needs to know roughly which examples to show you.
        </p>

        <h3 className="mt-6 font-display text-lg font-semibold text-accent">
          Created by playing, if you have an account
        </h3>
        <p className="mt-2 leading-relaxed text-body">
          Your progress is saved to your account so it follows you between
          devices:
        </p>
        <ul className="mt-2 list-disc space-y-2 pl-5 text-body">
          <li>Gold, XP and literacy points</li>
          <li>Which lessons you have finished and your quiz scores</li>
          <li>Money habits you have saved, and which days you logged them</li>
          <li>Jar progress and challenge progress</li>
          <li>
            Finished lives from the life simulation (net worth, ending, age
            reached)
          </li>
          <li>Which places in the town you have visited</li>
          <li>Skins you have unlocked and which one you have equipped</li>
          <li>
            Your in-game transaction ledger, holdings and portfolio history —{" "}
            <strong className="text-ink">
              all of this is play money.
            </strong>{" "}
            No real account, card or brokerage is ever connected.
          </li>
        </ul>

        <h3 className="mt-6 font-display text-lg font-semibold text-accent">
          Stored only on your device, never uploaded
        </h3>
        <ul className="mt-2 list-disc space-y-2 pl-5 text-body">
          <li>Sound and music toggles</li>
          <li>Whether you have seen the tutorial</li>
          <li>How many times the app has been opened</li>
          <li>A cached copy of your progress, so the app works offline</li>
          <li>Feedback you have written that has not been sent yet</li>
        </ul>
        <p className="mt-4 leading-relaxed text-body">
          Clearing the app&rsquo;s data or uninstalling it removes all of
          this.
        </p>

        <h3 className="mt-6 font-display text-lg font-semibold text-accent">
          If you send feedback
        </h3>
        <p className="mt-2 leading-relaxed text-body">
          The Feedback screen sends the category you picked, your message,
          and — if you are signed in — your user ID and email, so we can
          reply and so we can tell whether two reports are the same person.
          If you are offline it is held on your device until it can be sent.
        </p>

        <hr className="my-10 border-border" />

        <h2 className="font-display text-xl font-bold text-ink">
          What we do <strong>not</strong> collect
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-body">
          <li>
            <strong className="text-ink">No location.</strong> The app never
            asks for or receives your location.
          </li>
          <li>
            <strong className="text-ink">
              No contacts, calendar, microphone or camera.
            </strong>{" "}
            The only device permission the app can request is access to your
            photo library, and only at the moment you tap &ldquo;change
            photo&rdquo;.
          </li>
          <li>
            <strong className="text-ink">
              No advertising ID, no device fingerprint, no analytics SDK, no
              crash reporting.
            </strong>{" "}
            There is no Firebase, no Google Analytics, no Sentry, no
            AppsFlyer, no Meta SDK and no ad network in this app.
          </li>
          <li>
            <strong className="text-ink">
              No behavioural profiles for advertising.
            </strong>{" "}
            We do not build one, sell one, or let anybody else build one from
            your use of this app.
          </li>
          <li>
            <strong className="text-ink">No real financial data.</strong> We
            never ask for a bank account, card, brokerage login, income or
            net worth. The Market Board shows real <em>prices</em>; it never
            touches real <em>money</em>.
          </li>
        </ul>

        <hr className="my-10 border-border" />

        <h2 className="font-display text-xl font-bold text-ink">
          Who else receives anything
        </h2>
        <p className="mt-4 leading-relaxed text-body">
          We keep this list short deliberately. Every entry is something the
          app genuinely contacts.
        </p>
        <p className="mt-4 leading-relaxed text-body">
          <strong className="text-ink">Supabase</strong> — our backend. Holds
          your account, your saved progress and your profile photo. This is
          where your data lives.
        </p>
        <p className="mt-4 leading-relaxed text-body">
          <strong className="text-ink">Cloudflare Turnstile</strong> — a
          &ldquo;are you a human&rdquo; check shown when you create an
          account. It loads in a small web view from{" "}
          <code className="rounded bg-bg-alt px-1.5 py-0.5 text-[0.9em]">
            challenges.cloudflare.com
          </code>
          , and Cloudflare receives your IP address and some browser signals
          in order to make that judgement. It is used only at sign-up.
        </p>
        <p className="mt-4 leading-relaxed text-body">
          <strong className="text-ink">Finnhub and Twelve Data</strong> —
          real stock prices for the Market Board. Where our price proxy is
          configured, only a ticker symbol is sent and your device never
          contacts these companies directly. If the proxy is unavailable the
          app falls back to requesting prices directly, in which case your
          device&rsquo;s IP address reaches them as part of an ordinary web
          request. Either way, no account information, username or progress
          is ever sent.
        </p>
        <p className="mt-4 leading-relaxed text-body">
          <strong className="text-ink">Wikimedia Commons</strong> — company
          logos shown next to tickers on the Market Board are loaded as
          images from{" "}
          <code className="rounded bg-bg-alt px-1.5 py-0.5 text-[0.9em]">
            upload.wikimedia.org
          </code>
          , which means your IP address reaches Wikimedia the same way it
          would if you visited any website.
        </p>
        <p className="mt-4 leading-relaxed text-body">
          <strong className="text-ink">
            Government and regulator websites
          </strong>{" "}
          — every lesson cites a primary source (CFPB, SEC/Investor.gov, IRS,
          FDIC, FTC and similar). Those are <strong>links</strong>. Nothing is
          sent to them unless you tap one, and when you do it opens in your
          own browser.
        </p>
        <p className="mt-4 leading-relaxed text-body">
          Fonts are bundled inside the app, so no font service is contacted
          at any point.
        </p>

        <hr className="my-10 border-border" />

        <h2 className="font-display text-xl font-bold text-ink">Children</h2>
        <p className="mt-4 leading-relaxed text-body">
          Budget Buddy is built to be used by children, and that shapes
          several decisions:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-body">
          <li>
            <strong className="text-ink">
              Under-13 accounts are kept off the public leaderboard.
            </strong>{" "}
            If the account says it belongs to someone under 13, it is
            excluded from the leaderboard by the database itself. It is not
            a preference that can be toggled on.
          </li>
          <li>
            <strong className="text-ink">
              Email addresses are masked on the profile screen
            </strong>{" "}
            so a screenshot of a child&rsquo;s profile does not contain a
            real contact detail.
          </li>
          <li>
            <strong className="text-ink">
              There is no chat and no messaging.
            </strong>{" "}
            Players cannot send each other anything, in any form.
          </li>
          <li>
            <strong className="text-ink">
              What another player can see about you
            </strong>{" "}
            is your username, your level, your score, and your profile photo
            if you have set one. That is the whole list — your email, age
            band, lessons, habits and life-simulation history are never shown
            to anyone else.
          </li>
          <li>
            <strong className="text-ink">
              Friends are added by a code you choose to share
            </strong>
            , not by scanning contacts or by any kind of suggestion system.
          </li>
          <li>
            <strong className="text-ink">No ads.</strong> There is nothing in
            the app for anyone to advertise to a child.
          </li>
        </ul>
        <p className="mt-4 leading-relaxed text-body">
          <strong className="text-ink">
            A note for parents about profile photos.
          </strong>{" "}
          A photo you add is shown next to your name on the public
          leaderboard. Under-13 accounts are kept off that leaderboard
          entirely, so a younger child&rsquo;s photo is not shown to other
          players — but for a 13-or-over account it is. The photo is
          optional and can be removed at any time, and if you would rather
          your child did not have one, the app works exactly the same
          without it.
        </p>
        <p className="mt-4 leading-relaxed text-body">
          If you are a parent or guardian and want your child&rsquo;s account
          and its data deleted, contact us using the details below and we
          will remove it.
        </p>

        <hr className="my-10 border-border" />

        <h2 className="font-display text-xl font-bold text-ink">
          How long we keep things
        </h2>
        <p className="mt-4 leading-relaxed text-body">
          Your account and progress are kept until the account is deleted.
          Feedback messages are kept while we work through them. The copies
          stored on your own device disappear when you uninstall the app or
          clear its data.
        </p>

        <h2 className="mt-8 font-display text-xl font-bold text-ink">
          Deleting your account
        </h2>
        <p className="mt-4 leading-relaxed text-body">
          <strong className="text-ink">From inside the app:</strong> Profile
          → <em>Delete my account</em>, at the bottom of the screen under Log
          Out. You will be shown exactly what is about to go and asked to
          type DELETE to confirm. It happens immediately and it cannot be
          undone.
        </p>
        <p className="mt-4 leading-relaxed text-body">
          That removes your account and everything attached to it:
        </p>
        <ul className="mt-2 list-disc space-y-2 pl-5 text-body">
          <li>your level, coins and every skin you own;</li>
          <li>every life you have played and every ending you found;</li>
          <li>your lessons, quiz scores and streak;</li>
          <li>your friends list, and your entry on other people&rsquo;s;</li>
          <li>your profile photo, if you uploaded one;</li>
          <li>any feedback you sent us;</li>
          <li>your sign-in record, so the email address is free to use again.</li>
        </ul>
        <p className="mt-4 leading-relaxed text-body">
          <strong className="text-ink">By email:</strong> you can also write
          to us at the address below from the address the account uses, and
          we will delete it within 30 days. Use this if you have lost access
          to the account and cannot sign in to delete it yourself.
        </p>

        <h2 className="mt-8 font-display text-xl font-bold text-ink">
          Your choices
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-body">
          <li>
            Age, gender, pronoun and profile photo are all optional and all
            have a &ldquo;prefer not to say&rdquo; or &ldquo;skip&rdquo;
            option.
          </li>
          <li>
            You can sign out at any time from the Profile screen, and delete
            your account from the same screen.
          </li>
          <li>
            Depending on where you live you may have the right to ask for a
            copy of your data, to correct it, or to have it deleted. Email us
            and we will do it.
          </li>
        </ul>

        <h2 className="mt-8 font-display text-xl font-bold text-ink">
          Changes to this policy
        </h2>
        <p className="mt-4 leading-relaxed text-body">
          If this policy changes we will update the date at the top and note
          what changed. If a change materially affects what we collect, we
          will say so in the app rather than only here.
        </p>

        <h2 className="mt-8 font-display text-xl font-bold text-ink">
          Contact
        </h2>
        <p className="mt-4 leading-relaxed text-body">
          <strong className="text-ink">Email:</strong>{" "}
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="text-accent underline"
          >
            {siteConfig.contactEmail}
          </a>
        </p>
        <p className="mt-4 leading-relaxed text-body">
          A privacy policy has to give a real way to reach a human. Use an
          address you are willing to publish — a project address rather than
          a personal one is usually the right call, since this page will be
          linked from a public store listing.
        </p>

        <footer className="mt-14 border-t border-border pt-5 text-sm text-muted">
          Budget Buddy · Privacy policy last updated 1 September 2026.
          <br />
          This page is generated from{" "}
          <code className="rounded bg-bg-alt px-1.5 py-0.5 text-[0.9em]">
            docs/PRIVACY_POLICY.md
          </code>{" "}
          in the app&rsquo;s own repository.
        </footer>
      </div>
    </section>
  );
}
