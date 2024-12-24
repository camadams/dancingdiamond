import Image from "next/image";

import { Lora, Nunito_Sans } from "next/font/google";
import ImageComponent from "./ImageComponent";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "700"], // Optional: choose weights
  display: "swap",
});

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "700"], // Optional: choose weights
  display: "swap",
});

export default function Home() {
  return (
    <main>
      <div className="w-full h-[6px] flex mb-10">
        <div className="bg-blue-400 w-1/5 h-full"></div>
        <div className="bg-blue-500 w-1/5 h-full"></div>
        <div className="bg-blue-600 w-1/5 h-full"></div>
        <div className="bg-blue-700 w-1/5 h-full"></div>
        <div className="bg-blue-800 w-1/5 h-full"></div>
      </div>
      {/* <div className="h-[90vh] bg-gradient-to-b from-blue-200/85 to-white/85 relative">
        <div className="absolute -z-10 w-full h-full">
          <Image
            className="object-cover"
            src="/2a simons town yacht club.jpg"
            alt="Picture of the author"
            fill
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-6 h-full">
          <h1 className="text-6xl">Dancing Diamond</h1>
          <h2 className="text-2xl">
            Glenn and Margie Adams adventures around the world
          </h2>
          <h3 className="italic text-2xl">March 1988 - Feb 1992</h3>
        </div>
      </div> */}
      <div className="flex ">
        <div className="md:space-y-52 space-y-40">
          <section>
            <div className="max-w-5xl px-4 m-auto space-y-4 mb-8">
              <h1
                className={`sm:text-4xl text-2xl font-medium  capitalize ${lora.className}`}
              >
                <span className="text-sm ">1</span> Masiphumelele
              </h1>
              <p className={`sm:text-xl text-md ${nunito.className}`}>
                I am going to start to relive my journey on my little boat when
                Margie and I spent 4 years sailing. It all started in about 1984
                when I bought a bare hull and built a yacht on Kraanshof farm,
                current day site 5 or Masiphumelele.
              </p>
            </div>
            <ImageComponent pics={["/1 masi.jpg"]} />
          </section>
          <section>
            <div className="max-w-5xl px-4 m-auto space-y-4 mb-8">
              <h1
                className={`sm:text-4xl text-2xl font-medium  ${lora.className}`}
              >
                <span className={`text-sm`}>2</span> Simons Town Yacht Club
              </h1>
              <p className={`sm:text-xl text-md ${nunito.className}`}>
                Launch day. About 3 years of building. A lot of work and
                sacrifice. It's your ambition, dream and determination that
                drives you. Earned the money by diving diamonds on the west
                coast. Melting the lead into ingots for the keel 1500 kg. Next
                port of call #sainthelenaisland Pacific.
              </p>
            </div>
            <ImageComponent
              pics={[
                "/2a simons town yacht club.jpg",
                "/2b pouring metal.jpg",
                "/2c yacht on wheels.jpg",
              ]}
            />
          </section>
          <section>
            <div className="max-w-5xl px-4 m-auto space-y-4 mb-8">
              <h1
                className={`sm:text-4xl text-2xl font-medium  ${lora.className}`}
              >
                <span className="text-sm ">3</span> Saint Helena Island,
                Atlantic Ocean Sailing
              </h1>

              <p className={`sm:text-xl text-md ${nunito.className}`}>
                Off to saint helena island, Atlantic ocean . Self steering
                packed up 300 miles outside CT. Steered 1400 miles by hand. 2 of
                us 2 hours on 2 hours off. 24 hours for the next 14 days. Saint
                helena island an english colony. Most welcoming in 1988. We were
                entertained and escorted around the island for the next 10 days.
                Never ate on board. Always put up by the locals. Amazing diving,
                littered with wrecks and shot huge fish. No scuba allowed,
                protecting wrecks from plunder. My compressor and air line held
                in bond till departure. Next port of call Salvador Brazil. Now
                the party starts.
              </p>
            </div>
            <ImageComponent
              pics={[
                "/3a Saint Helena Island, Atlantic Ocean Sailing.jpg",
                "/3b Saint Helena Island, Atlantic Ocean baking on yacht.jpg",
                "/3c Saint Helena Island Atlantic Ocean with locals.jpg",
              ]}
            />
          </section>
          <section>
            <div className="max-w-5xl px-4 m-auto space-y-4 mb-8">
              <h1
                className={`sm:text-4xl text-2xl font-medium  ${lora.className}`}
              >
                <span className="text-sm ">4</span> Salvador, Brazil
              </h1>
              <p className={`sm:text-xl text-md ${nunito.className}`}>
                Saint helena to salvador, Brazil, 1800 miles nautical. 18 days
                lockdown like in a 7M x 2M room that doesn't stop moving and you
                have headroom in half of that. You can go up on the roof and
                check out the storms or go spearfishing in the doldrums. This
                was before GPS, satnav was around but scarce.. You spent most of
                the day navigating. With a sextant you take the angle of
                celestial body above the horizon and with a very accurate time
                and your dead reckoning position and a pile of tables, you get a
                position line. You can be anywhere on that line ! You
                continuously checking gear, at night you tuned into noises of
                the ocean, sails and rigging. No mistakes are allowed, we won't
                go there.the 2 of us are very comparable there is only 1 captain
                on a ship. Arriving in Brazil was great. We spent 6 months here.
              </p>
            </div>
            <ImageComponent
              pics={[
                "/4a salvador brazil.jpg",
                "/4b salvador brazil catching fish.jpg",
                "/4c salvador brazil with margie on beach.jpg",
              ]}
            />
          </section>
          <section>
            <div className="max-w-5xl px-4 m-auto space-y-4 mb-8">
              <h1
                className={`sm:text-4xl text-2xl font-medium  ${lora.className}`}
              >
                <span className="text-sm ">5</span> Salvador, Brazil 2
              </h1>
              <p className={`sm:text-xl text-md ${nunito.className}`}>
                We had a 6 month Visa for Brazil. This place left an indelible
                mark on my brain. Coming from a verkrampte boere state, brazil
                was such fun. With a 400% inflation nobody saves, its like there
                is no tomorrow. You cash your dollars daily on the street and
                you are king. We spent the next 6 months cruising north to the
                Amazon with thousands of rivers and estuaries and venturing deep
                into the interior.
              </p>
            </div>
            <ImageComponent
              pics={[
                "/5a brazil local brazilians fishing.jpg",
                "/5b brazil boat docked.jpg",
                "/5c brazil margie and friend.jpg",
              ]}
            />
          </section>
          <section>
            <div className="max-w-5xl px-4 m-auto space-y-4 mb-8">
              <h1
                className={`sm:text-4xl text-2xl font-medium  ${lora.className}`}
              >
                <span className="text-sm ">6</span> Îles du Salut
              </h1>
              <p className={`sm:text-xl text-md ${nunito.className}`}>
                After 4 weeks in the Amazon we left Brazil. Stopped of at il du
                salute or devils island from movie papillon. Off french Guana.
                We knew this was a hang out spot for yachts and were so pleased
                to see about 8 boats here. Hadn’t been in contact with
                westerners for 6 months. Made such good friends and sailed on to
                the Caribbean with most of them. Now we in cruising mode.
              </p>
            </div>
            <ImageComponent
              pics={[
                "/6a ile du salut huts.jpg",
                "/6b ile du salut.jpg",
                "/6c ile du salut hammock.jpg",
              ]}
            />
          </section>
          <section>
            <div className="max-w-5xl px-4 m-auto space-y-4 mb-8">
              <h1
                className={`sm:text-4xl text-2xl font-medium  ${lora.className}`}
              >
                <span className="text-sm ">7</span> Tobago
              </h1>
              <p className={`sm:text-xl text-md ${nunito.className}`}>
                We left Iles du Salut for Tobago, southern part of the
                Caribbean. Absolutely beautiful. crystal clear seas after those
                muddy water of Brazil's estuaries. Now we living the cruising
                life. Diving, fishing, visiting the numerous yachts chasing the
                same dream. Eating ashore and visiting the hundreds of bars on
                the beaches. Was starting to get a bit touristy and believe
                worse now. They just want your dollars. Next stop
                #saintmaarteen.
              </p>
            </div>
            <ImageComponent
              pics={[
                "/7a tobago bay.jpg",
                "/7b tabago margie in boat.jpg",
                "/7c tabago glenn on boat.jpg",
                "/7d tabago glenn eating with friend.jpg",
              ]}
            />
          </section>
          <section>
            <div className="max-w-5xl px-4 m-auto space-y-4 mb-8">
              <h1
                className={`sm:text-4xl text-2xl font-medium  ${lora.className}`}
              >
                <span className="text-sm ">8</span> Mullet Bay Resort on Saint
                Maarten
              </h1>
              <p className={`sm:text-xl text-md ${nunito.className}`}>
                December 1988 we got a job running the dock at mullet bay resort
                on Saint maarten. Margie ran activities desk, booking
                paragliding, Yamaha wave runners, jetski, ski boat hire, banana
                boat rides, day charters on 3 big sailing cats, the waterskiing
                course was in the lagoon surrounded by one of the top golf
                courses in the world. There were 8 to 10 flights a day to and
                from the island, mainly from the states. Americans came here
                with big budgets and they had to spend it. Everything was laid
                on, free open bar. I managed the dock and skippered the one
                trimaran. We worked here for 10 months before moving on to the
                Panama and Pacific.
              </p>
            </div>
            <ImageComponent
              pics={[
                "/8a mullet bay resort on saint maarten margie office.jpg",
                "/8b mullet bay resort on saint maarten jetskis.jpg",
                "/8c mullet bay resort on saint maarten catamaran.jpg",
                "/8d mullet bay resort on saint maarten glenn barrels.jpg",
              ]}
            />
          </section>
          <section>
            <div className="max-w-5xl px-4 m-auto space-y-4 mb-8">
              <h1
                className={`sm:text-4xl text-2xl font-medium  ${lora.className}`}
              >
                <span className="text-sm ">9</span> Lasaves and Curacao off
                Venezuela
              </h1>
              <p className={`sm:text-xl text-md ${nunito.className}`}>
                Now we were tired of tourists, Chase Manhattan bank balance was
                overflowing. Did major repairs and maintenance. Chart draws full
                of charts for the Pacific. Acquired a GPS. New outboard 2hp. New
                surfboard and diving gear. Off to the Panama but spent a few
                weeks on #lasaves and #curacao off Venezuela. Now this is what
                we looking for, crystal clear water and abundant marine life.
                Paradise on virgin beaches.
              </p>
            </div>
            <ImageComponent
              pics={[
                "/9a San Blas Islands fishing with locals.jpg",
                "/9a vene Glenn with Fosh.jpg",
                "/9b Vene Glenn snorking crayfish.jpg",
                "/9c San Blas Islands huts.jpg",
                "/9c San Blas Islands kids holding fish.jpg",
                "/9c vene market.jpg",
                "/9d San Blas Islands friends.jpg",
              ]}
            />
          </section>
          <section>
            <div className="max-w-5xl px-4 m-auto space-y-4 mb-8">
              <h1
                className={`sm:text-4xl text-2xl font-medium  ${lora.className}`}
              >
                <span className="text-sm ">10</span> San Blas Islands
              </h1>
              <p className={`sm:text-xl text-md ${nunito.className}`}>
                19 December 1989. We on our way to the Panama. Gale force wind
                nicely on our stern. Fully reefed main and a small little storm
                jib. BBC announce Panama canal closed. America had declared war
                on panama. America had a 99 year lease on the canal zone, they
                built it. Noriega the president wanted to control the canal for
                drug trafficking to the US. We changed course and had to hole up
                in the archipelago of the San Blas. The British admiralty charts
                just said uncharted. Inhabited by the Kuna Indians, only access
                by sea, no roads. All we did for 3 weeks was dive everyday. I
                was getting to 60 feet and working there. Every day was a
                different fish. Dived mostly with the locals, they dived
                crayfish. We also enjoyed company of 2 American yachaties who
                were also holed up waiting for the clear.
              </p>
            </div>
            <ImageComponent
              pics={[
                "/10a Panama Canal document.jpg",
                "/10b Panama Canal glenn on boat.jpg",
                "/10c Panama Canal margie on boat.jpg",
              ]}
            />
          </section>
          <section>
            <div className="max-w-5xl px-4 m-auto space-y-4 mb-8">
              <h1
                className={`sm:text-4xl text-2xl font-medium  ${lora.className}`}
              >
                <span className="text-sm ">11</span> Panama canal
              </h1>
              <p className={`sm:text-xl text-md ${nunito.className}`}>
                Transiting the Panama canal is an exciting time for any
                yachtsman. We hung out at the colon yacht club while we
                organized paperwork. This place is the crossroads for drugs,
                cash and organized crime into the states. It is an extremely
                strategic waterway from american east and west coasts. This is
                why they are so possessive over this place. With Noriega
                interfering, they brought in 27 000 marines. helicopter gunships
                blew up police stations and government buildings. The city was a
                wreck. GI's had a girl under each arm. Imagined this was like
                Vietnam.
              </p>
            </div>
            <ImageComponent
              pics={[
                "/11a Panama City friends.jpg",
                "/11b Panama City glenn margie kids.jpg",
                "/11c Panama City glenn with fish on boatjpg.jpg",
              ]}
            />
          </section>
          <section>
            <div className="max-w-5xl px-4 m-auto space-y-4 mb-8">
              <h1
                className={`sm:text-4xl text-2xl font-medium  ${lora.className}`}
              >
                <span className="text-sm ">12</span> Panama City
              </h1>
              <p className={`sm:text-xl text-md ${nunito.className}`}>
                Now we in Panama City, pacific side. We have been travelling
                with yacht Cedilla since San blaas and made good friends with
                the Frazers, an American family. We organized visas for Ecuador.
                4 day sail to Esmeralda, an Ecuador fishing town, prawns galore.
                Excellent wind for 2 days then the doldrums 2 days. Oceans
                teeming with fish. Dorado and flying fish big enough to eat.
                They land on the deck at night. We then fly to Quito and spend 6
                days in the andes. John was a wall street stockbroker and
                Cedilla an investor broker. Back to the boat and we stocked up
                for a year suppliers. Beers $ 0.32 cents. Tahiti $ 7.00. Next
                stop #Galapagos.
              </p>
            </div>
            <ImageComponent
              pics={[
                "/12a Ecuador to Galapagos maps.jpg",
                "/12b Ecuador to Galapagos glenn shaking hands.jpg",
                "/12c Ecuador to Galapagos margie infront of boat.jpg",
              ]}
            />
          </section>
          <section>
            <div className="max-w-5xl px-4 m-auto space-y-4 mb-8">
              <h1
                className={`sm:text-4xl text-2xl font-medium  ${lora.className}`}
              >
                <span className="text-sm ">13</span> Ecuador to Galapagos
              </h1>
              <p className={`sm:text-xl text-md ${nunito.className}`}>
                Ecuador to Galapagos 696 miles, 9.5 days. We on the equator,
                doldrums, no wind, open skies and you can see the squalls coming
                very strong gusts will flatten you or tear up your sails if too
                much canvas is out. Driving rain then it's all over. Sea is full
                of flying fish as Dorado chase them. Galapagos was great. Met up
                the charter boat we met in Ecuador. They were Ecuadorian living
                on the island. They entertained us for 3 days. Cleaned bottom of
                boat and antifoul . Prepared for the biggest crossing in the
                world 2800 miles to #marquesas.
              </p>
            </div>
            <ImageComponent
              pics={[
                "/13a Pitcairn island island photo.jpg",
                "/13b Pitcairn island marige.jpg",
                "/13c Pitcairn island glen with knots.jpg",
                "/13d Pitcairn island glen with fish.jpg",
              ]}
            />
          </section>
          <section>
            <div className="max-w-5xl px-4 m-auto space-y-4 mb-8">
              <h1
                className={`sm:text-4xl text-2xl font-medium  ${lora.className}`}
              >
                <span className="text-sm ">14</span> Pitcairn Island
              </h1>
              <p className={`sm:text-xl text-md ${nunito.className}`}>
                Leaving Galapagos We on our way to Pitcairn island. For 11 days
                we bashed against a headwind and made very slow progress. We
                then adjusted the wind vane and headed for the marquesas, a
                magnificent group of islands in the French polynesia. 29 days
                later or 3055 nautical miles +/_ 5400 km, 2 of us on a 28 foot
                yacht. We are in the heart of the Pacific the most beautiful
                islands and atolls. The best surf, virgin waves accessible only
                by boat. Crystal clear warm water for diving. Abundant fish and
                sea sealife. Lived a high protein diet. Fish, crayfish, seabirds
                and eggs, coconuts in every possible way.
              </p>
            </div>
            <ImageComponent
              pics={[
                "/14a French Polynesia drawing.jpg",
                "/14b French Polynesia Glenn and Margie on Dancing Diamond.jpg",
                "/14c French Polynesia Glenn with fihs.jpg",
                "/14d French Polynesia Glenn and Margie on mountain.jpg",
              ]}
            />
          </section>
          <section>
            <div className="max-w-5xl px-4 m-auto space-y-4 mb-8">
              <h1
                className={`sm:text-4xl text-2xl font-medium  ${lora.className}`}
              >
                <span className="text-sm ">15</span> French Polynesia
              </h1>
              <p className={`sm:text-xl text-md ${nunito.className}`}>
                We spent about 6 months in French polynesia. Most of the time
                was surfing, as conditions were ideal. 1 foot tide difference,
                trade winds stead from the S - SE. And you surfing close to the
                coral reef with little fetch on the water so you get smooth
                waves. No crowds, maybe a few of the other yachts you with. When
                there is swell it's all day, crystal clear warm water, no
                wetsuit. All waves are found in the passes #Mopelia one of our
                favourite surf spots. Spent a month here. About 4 other yachts
                here we raft together, home brew and home grown from the island.
                1 restaurant and bar. Locals are surf rats, that's all you can
                do and dive and fish. Eventually had to leave, kissed the reef
                and got 5 stitches under the chin, knew I was going to get into
                the water before stitches out. 6 to 8 foot perfection every wave
                the same, barrels after barrels . Off to Bora Bora.
              </p>
            </div>
            <ImageComponent
              pics={[
                "/15a Bora Boa Glenn with lots of coconuts.jpg",
                "/15b Bora Boa coconut tree.jpg",
                "/15c Bora Boa Glenn with locals and crayfish.jpg",
                "/15d Bora Boa Margie eating with locals.jpg",
                "/15e Bora Boa Local with lots of Fish.jpg",
                "/15f Bora Boa Local with coconut crab and spider.jpg",
              ]}
            />
          </section>
          <section>
            <div className="max-w-5xl px-4 m-auto space-y-4 mb-8">
              <h1
                className={`sm:text-4xl text-2xl font-medium  ${lora.className}`}
              >
                <span className="text-sm ">16</span> Huahine, Bora Bora
              </h1>
              <p className={`sm:text-xl text-md ${nunito.className}`}>
                We left Huahine, a 6 day stop at Bora Bora . Our last stop in
                French polynesia, was Mopelia, an atoll 100 miles away. We were
                the only yacht here. There were 3 families all living about 2 km
                apart. Marcello, wife and 2 kids, they were coconut copra
                farmers. The pearl divers / farmers in the middle and Simon and
                Andrea in the south. Completely isolated, visited once every 6
                months by the French navy brought vital suppliers and collected
                copra. We spent our time with these guys. They taught us so much
                on how you survive on atol. Catching seabirds, collecting eggs,
                crayfish, fishing, coconut crabs. Favourite as poison cru or raw
                fish. Best is with a blue parrot fish, soak fish qubes in lemon
                juice half hour, fish will turn white, marinate in coconut milk
                half an hour. Absolutely delicious. After 3 weeks we had to
                leave the atoll as there was starting jealousy and infighting
                between the families on how our time must be split up between
                them. Next stop Cook islands.
              </p>
            </div>
            <ImageComponent pics={[]} />
          </section>
          <section>
            <div className="max-w-5xl px-4 m-auto space-y-4 mb-8">
              <h1
                className={`sm:text-4xl text-2xl font-medium  ${lora.className}`}
              >
                <span className="text-sm ">17</span> Mopelia Atoll/ Aitutaki,
                Cook Islands
              </h1>
              <p className={`sm:text-xl text-md ${nunito.className}`}>
                We left mopelia atoll were going to do a quick stop over on
                #aitutaki northern part of cook island 380 miles away. We needed
                dry goods as we shared all with the families on mopelia. Looking
                back at my diary I see we had 3.5 L of drinking water on board.
                No water on atolls, only rain water. Beautiful SE trades to cook
                islands. Half a day away, the wind turns into the N, very
                unusual. Heavy rain filled all tanks and containers with fresh
                water. I made the whole deck a rain catcher, dammed off all
                outlets on gunnels. This was the start of a mother of all
                storms. A stationary low .the wind changed quickly back to the
                S. Blown off course at the mercy of the ocean, winds at 70
                knots. Surfing down huge waves touching 18 knots the little
                yacht vibrates. At night its pitch dark the noise is frightening
                as the waves wash over the whole boat and overtake you in the
                troughs. Only light is the small red compass light and you can
                see the compass turns 90 degrees in a second, the sails and
                rigging go crazy as the wind vane battles to get us back on
                course. For a full 3 days we never or we couldn't open the
                hatch. Only a storm job, the size of a small windsurfer sail. We
                arrived in tonga 17.5 days, 1530 miles. Rhumb line 1280 miles.
                Tonga was great about 1.5 months here. No surf or we didn't look
                for surf. A lot of Australians and more kiwis. Spent a lot of
                time with them.
              </p>
            </div>
            <ImageComponent
              pics={[
                "/17a Mopelia Atoll and Aitutaki Cook Islands birthday party on boat.jpg",
                "/17b Mopelia Atoll and Aitutaki Cook Islands Glenn and Margie on boat with fish.jpg",
                "/17c Mopelia Atoll and Aitutaki Cook Islands Glenn on boat with crayfish.jpg",
                "/17d Mopelia Atoll and Aitutaki Cook Islands Glenn on boat with fish.jpg",
              ]}
            />
          </section>
          <section>
            <div className="max-w-5xl px-4 m-auto space-y-4 mb-8">
              <h1
                className={`sm:text-4xl text-2xl font-medium  ${lora.className}`}
              >
                <span className="text-sm ">18</span> Tonga, Fiji, New Caledonia,
                and Lord Howe Island then the Mainland of Australia
              </h1>
              <p className={`sm:text-xl text-md ${nunito.className}`}>
                We spent the next 5 months in Tonga, fiji, new caledonia, and
                #lordhoweisland then the mainland of australia. One of the
                nicest things about cruising is the other people sailing. This
                was before internet and cellphones. There was single sideband
                radio SSB, which we didn't have. There was always huge
                celebrations when you met up with old buddies and shared
                stories. You then spend the next week or so exploring the
                surrounding islands. Surfing, diving, fishing and eating on the
                beaches.
              </p>
            </div>
            <ImageComponent
              pics={[
                "/18 Tonga fiji Glenn and Margie at yacht club.jpg",
                "/18b Tonga fiji Margie and friends drinking cocnuts on beach.jpg",
                "/18c Tonga fiji Glenn catching sea snake on boat.jpg",
                "/18d Tonga fiji Glenn the skipper.jpg",
              ]}
            />
          </section>
          <section>
            <div className="max-w-5xl px-4 m-auto space-y-4 mb-8">
              <h1
                className={`sm:text-4xl text-2xl font-medium  ${lora.className}`}
              >
                <span className="text-sm ">19</span> Australia
              </h1>
              <p className={`sm:text-xl text-md ${nunito.className}`}>
                We spent a year in aussie. 6 months I worked on a commercial
                fishing vessel.
              </p>
            </div>
            <ImageComponent
              pics={[
                "/19a Australia Glenn the fisherman.jpg",
                "/19b Australia Glenn with big flat fish.jpg",
                "/19c Australia Glenn and Margie dressed up.jpg",
                "/19d Australia Margie washing dishing on harbour.jpg",
              ]}
            />
          </section>
          <section>
            <div className="max-w-5xl px-4 m-auto space-y-4 mb-8">
              <h1
                className={`sm:text-4xl text-2xl font-medium  ${lora.className}`}
              >
                <span className="text-sm ">20</span> Australia 2
              </h1>
              <p className={`sm:text-xl text-md ${nunito.className}`}>
                4 months Visa left in aussie. From Sydney we make our way north
                along the new south wales coast. Aussie are great water people,
                cruising yachts it's a way of life and wherever you go you are
                welcome. Invited to their homes and their farms and barbecues,
                they privileged people spoilt with natural beauty. Barrier reef
                was amazing. Places like Cook Town, named after Captain James
                Cook. Up north to Cape York and fantastic fishing and diving in
                Torres strait. We end up in Darwin where we prepare for our
                Indian Ocean crossing. There is a whole flotilla of foreign
                yachts on the same crossing . What fun when we all on the same
                wavelength speaking different languages.
              </p>
            </div>
            <ImageComponent
              pics={[
                "/20a Australia 2 Glenn with Captain James Cook.jpg",
                "/20b Australia 2 Dancing Diamond docked.jpg",
                "/20c Australia 2 Glenn and Margie inside boat with friends.jpg",
                "/20d Australia 2 Glenn with Fish.jpg",
              ]}
            />
          </section>
          <section>
            <div className="max-w-5xl px-4 m-auto space-y-4 mb-8">
              <h1
                className={`sm:text-4xl text-2xl font-medium  ${lora.className}`}
              >
                <span className="text-sm ">21</span> Cocos Keeling Island
              </h1>
              <p className={`sm:text-xl text-md ${nunito.className}`}>
                We found a little gem in the Indian Ocean cocos keeling island.
                A feat on its own. 1980 miles or 3680 km or 17 days . We had a
                most pleasant trip steady trade winds all the way. We hung out
                on direction island for a month. 23 August to 21 Sept. No one
                else but about 8 yachts coming and going all the time. It had
                everything. Most beautiful diving and abundant fish. Great
                company. Some of the best surf and all to myself, easy
                accessible from Anchorage by dingy. Main island about an hour
                motor was the Australia quarantine island so well stocked and
                inhabited by Aussies.
              </p>
            </div>
            <ImageComponent
              pics={[
                "/21a Cocos Keeling Island drawing.jpg",
                "/21b Cocos Keeling Island Glenn on boat with Friends and Fish.jpg",
                "/21c Cocos Keeling Island Travellers playing volleyball on island.jpg",
                "/21d Cocos Keeling Island waves.jpg",
                "/21e Cocos Keeling Island journal entry.jpg",
              ]}
            />
          </section>
          <section>
            <div className="max-w-5xl px-4 m-auto space-y-4 mb-8">
              <h1
                className={`sm:text-4xl text-2xl font-medium  ${lora.className}`}
              >
                <span className="text-sm ">22</span> Rodrigues Island
              </h1>
              <p className={`sm:text-xl text-md ${nunito.className}`}>
                Cocos keeling to #rodriguesisland was also a distance and no
                turning back. 1960 miles and a record time of 16 days weather
                and current I our favour. We were in a convoy of 6 boats,
                dancing diamond 28 foot surprised them all. We won the coveted
                prize for the fastest boat with a brewery on board. We then
                spent 9 days on Rodrigues. Mostly in the company of the flotilla
                and all the crew, every possible nation you can think of. Part
                of the Mauritius group and very isolated. Locals uncomplicated
                and polite. Privileged to visit such unique places.
              </p>
            </div>
            <ImageComponent
              pics={[
                "/22a Rodrigues Island certificate.jpg",
                "/22b Rodrigues Island margie on boat.jpg",
                "/22c Rodrigues Island Glenn on boat.jpg",
                "/22d Rodrigues Island Yachts.jpg",
              ]}
            />
          </section>
        </div>
      </div>
    </main>
  );
}
