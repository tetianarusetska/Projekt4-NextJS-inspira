type InspiraItem = {
  collection: string;
  author: string | null;
  title: string;
  year: string | null;
};

type InspiraCardProps = {
  items: InspiraItem[];
};

export default function InspiraCard({ items }: InspiraCardProps) {
  const groups = items.reduce<Record<string, InspiraItem[]>>((acc, item) => {
    if (!acc[item.collection]) {
      acc[item.collection] = [];
    }

    acc[item.collection].push(item);

    return acc;
  }, {});

  return (
    <div className="mx-auto w-full max-w-[1100px] border-[5px] border-black bg-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
      <div className="bg-[#EDEDED] px-8 py-10 md:px-14 md:py-14">

        {/* HEADER */}
        <header className="border-b-[3px] border-black pb-8">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h1 className="font-[Fayte] text-5xl md:text-7xl leading-none">
                i . nspira
              </h1>

              <p className="mt-3 font-inter font-black text-sm tracking-[0.35em] uppercase">
                KARTE
              </p>
            </div>

            <div className="hidden md:block font-inter text-xs font-bold tracking-widest uppercase">
              persönliche auswahl
            </div>
          </div>
        </header>

        {/* CONTENT */}
        <div className="mt-10 md:mt-14 space-y-12 md:space-y-16">
          {Object.entries(groups).map(([collection, collectionItems]) => (
            <section key={collection}>

              {/* COLLECTION */}
              <h2 className="mb-5 font-inter text-sm md:text-base font-black tracking-[0.3em] uppercase">
                {collection}
              </h2>

              {/* ITEMS */}
              <div className="space-y-4">
                {collectionItems.map((item, index) => (
                  <div
                    key={`${collection}-${item.title}-${index}`}
                    className="border-b border-black/30 pb-4"
                  >
                    <p className="font-inter text-lg md:text-2xl leading-tight">
                      {item.author && (
                        <span className="font-black">
                          {item.author}
                        </span>
                      )}

                      {item.author && " — "}

                      <span>
                        "{item.title}"
                      </span>

                      {item.year && `, ${item.year}`}
                    </p>
                  </div>
                ))}
              </div>

            </section>
          ))}
        </div>

        {/* FOOTER */}
        <footer className="mt-14 md:mt-20 border-t-[3px] border-black pt-5 flex justify-between items-end">
          <span className="font-inter text-xs font-bold tracking-widest uppercase">
            i . nspira
          </span>

          <span className="font-inter text-xs font-bold tracking-widest uppercase">
            {items.length} OBJEKTE
          </span>
        </footer>

      </div>
    </div>
  );
}