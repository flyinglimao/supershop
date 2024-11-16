"use client";

export function StartChat({ send }: { send: (txt: string) => void }) {
  return (
    <div className="flex flex-col">
      <p className="text-neutral-4 font-semibold text-center my-8">
        How can I help you, ser? 😊️
      </p>
      <div className="flex flex-col gap-4 px-8">
        <button
          type="button"
          className="rounded-3xl flex items-start justify-between border border-neutral-3/30 p-6"
          onClick={() =>
            send("I want to get White T-shirts for my fantasy stay in Bangkok")
          }
        >
          <div className="flex flex-col gap-2 items-start">
            <p className="text-neutral-3 font-semibold">
              I want to get White T-shirts
            </p>
            <p className="text-neutral-3 text-sm">
              for my fantasy stay in Bangkok
            </p>
          </div>
          <span className="-rotate-45 text-neutral-3">→</span>
        </button>
        <button
          type="button"
          className="rounded-3xl flex items-start justify-between border border-neutral-3/30 p-6"
          onClick={() =>
            send(
              "I want to get a Thai-Pants for heading to a daily trip in Ayutthaya"
            )
          }
        >
          <div className="flex flex-col gap-2 items-start">
            <p className="text-neutral-3 font-semibold">Get a Thai-Pants</p>
            <p className="text-neutral-3 text-sm">
              For heading to a daily trip in Ayutthaya
            </p>
          </div>
          <span className="-rotate-45 text-neutral-3">→</span>
        </button>
        <button
          type="button"
          className="rounded-3xl flex items-start justify-between border border-neutral-3/30 p-6"
          onClick={() =>
            send(
              "I want to prepare for a cocktail party and I need to follow a dress-code"
            )
          }
        >
          <div className="flex flex-col gap-2 items-start">
            <p className="text-neutral-3 font-semibold">
              Prepare for a cocktail party
            </p>
            <p className="text-neutral-3 text-sm">
              Need to follow a dress-code
            </p>
          </div>
          <span className="-rotate-45 text-neutral-3">→</span>
        </button>
      </div>
    </div>
  );
}
