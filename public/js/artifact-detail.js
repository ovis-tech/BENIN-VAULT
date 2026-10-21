document.addEventListener("DOMContentLoaded", () => {
  /* -------------------------
     Artifacts data (full list)
     ------------------------- */
  const artifacts = [
    {
      id: "",
      src: "ivory mask-1152x1440.jpg",
      name: "",
      english: "ivory mask",
      price: 1200,
      pronunciation: "",
      description:
        " In the early 16th century, the Benin Kingdom, located in what is now modern-day Nigeria, was flourishing under the reign of Oba Ozolua and later his son Oba Esigie. During this golden era, Queen Idia emerged as one of the most powerful and revered figures in Benin history. She was not only the mother of Oba Esigie but also his trusted advisor and spiritual guide. Her wisdom, courage, and mystical influence were credited with helping Esigie secure his throne amidst fierce internal conflicts and external threats.To honor her legacy, the Benin people commissioned a remarkable ivory mask that would become a symbol of her enduring presence and power. Crafted from the finest elephant ivory, the mask was intricately carved with extraordinary detail. It features the queen's serene yet commanding visage, crowned with delicate coral beads that signified royalty and divine protection. The mask’s design includes two stylized faces along the sides, representing the spirits of her children, and it was worn by the Oba during sacred ceremonies to invoke her guidance and protection.This ivory mask was more than just a decorative piece; it embodied the spiritual connection between the living king and his ancestral guardians. It was used in rituals to summon Queen Idia’s protective spirit, ensuring the prosperity and security of the kingdom. Through centuries, the mask survived wars, colonial plunder, and the passage of time, remaining a potent emblem of Benin’s artistic mastery and cultural identity.Today, the Ivory Mask of Queen Idia stands as a testament to the strength of women’s influence in African history, the skill of Benin artisans, and the enduring spirit of a queen whose legacy continues to inspire pride and reverence among the people of Benin and beyond.",
    },
    {
      id: "",
      src: "Benin Bronze Plaques.jpg",
      name: "",
      english: "Benin Bronze Plaques",
      price: 1200,
      pronunciation: "",
      description:
        "The Benin Bronze Plaques are exquisite metal artworks created by Edo artisans in the 16th century using the lost-wax casting technique. These plaques adorned the walls of the Royal Palace of Benin, depicting the kingdom’s kings, warriors, and important events.Each plaque tells a story of royal power, military victories, and cultural traditions, symbolizing the divine authority of the Oba (king). They feature detailed images of nobles, symbolic animals like leopards, and scenes from court life.Despite facing colonial looting and conflict, these plaques remain powerful symbols of Benin’s rich heritage and artistic mastery. Today, they are preserved in museums worldwide, celebrated for their historical and cultural significance..",
    },
    {
      id: "",
      src: "Birds of Prophecy.avif",
      name: "Ahianmwẹ-Ọrọ",
      english: "Birds of Prophecy",
      price: 1200,
      pronunciation: "",
      description:
        "Birds of Prophecy are symbolic artifacts in Benin culture, often crafted as bird-shaped figures. These birds represent messengers between the spiritual and physical worlds. Considered harbingers of wisdom and foresight, they are believed to carry the voices of ancestors and spirits, delivering important messages and prophecies to the people and the Oba (king).In ceremonies and rituals, these birds symbolize divine guidance, helping leaders make wise decisions and foresee future events. Their presence reflects the deep connection between nature, spirituality, and governance in Benin society.The craftsmanship of these bird figures showcases the intricate artistry of Benin metalworkers and carvers, blending symbolic meaning with aesthetic beauty.",
    },
    {
      id: "",
      src: "1f5b36e585da0845d707aac9f116177c8b4ffe36-4170x3128.avif",
      name: "Igho",
      english: "Manilla or Bracelet",
      price: 1200,
      pronunciation: "",
      description:
        "Long ago, when the mighty Obas ruled Benin and the bronze casters’ fires lit up the night, ships came from across the seas. The Portuguese traders brought shining copper and brass rings, shaped like the crescent moon. Our people called them Igho Manilla — ‘money bracelets.’With them, you could trade for ivory, palm oil, and fine cloth. A groom would present them as part of the bride price, for no marriage was complete without manillas. Chiefs stored them to show their wealth, and the Oba’s treasury guarded them as symbols of the kingdom’s power. They were also buried with the great and offered at shrines to honor the ancestors.For many seasons, the manillas flowed through our markets, linking Benin to the wider world. But when the British came with their coins and laws, their use began to fade. Today, they rest in museums and family chests, reminding us of a time when our wealth was shaped like the moon, and in its curve lay the story of our greatness.",
    },
    {
      id: "",
      src: "2ee0ec7c20ab08eedd3fc7cf7c406432293e7cfc-2901x3456.avif",
      name: "Uhunmwu-Ẹkuẹ",
      english: "Pendant Mask",
      price: 1200,
      pronunciation: "",
      description:
        "In the time of the great Obas, when Benin’s walls stood tall and its markets overflowed with wealth, there lived a mother whose wisdom shaped the destiny of the kingdom — Queen Idia, the mother of Oba Esigie. She was more than a queen; she was a warrior, a healer, and the heart of the Oba’s power.When enemies threatened Benin, Queen Idia’s counsel guided her son. Her magic and bravery brought victory in the wars, and peace returned to the land. To honor her, the court artists — masters of ivory and bronze — carved the Uhunmwu-Ẹkuẹ, the royal pendant mask, from the tusk of the elephant.It was not just a face. Around its crown were tiny heads of the Portuguese, the kingdom’s trading partners, and mudfish, sacred to Olokun, the god of wealth and the sea. The mask shone at ceremonies, hanging on the Oba’s chest, a reminder of his divine authority and the queen mother’s eternal protection.But when the British came in 1897, their soldiers looted the palace. The pendant masks, along with bronzes and treasures, were carried away across the seas. Today, the Uhunmwu-Ẹkuẹ rests in museums far from home, yet in the hearts of the Edo people, it still speaks — of the queen mother’s courage, of the Oba’s glory, and of a kingdom whose art could make ivory breathe.",
    },
    {
      id: "",
      src: "02fdca1ebd041648265c65177a40173bad266996-2000x3000.avif",
      name: "Uhunmwu-Elao",
      english: "Commemorative Head",
      price: 1200,
      pronunciation: "",
      description:
        "When an Oba of Benin joined the ancestors, his passing was not an end, but a transformation into eternal guardianship over the kingdom. To honor him, the new Oba would call upon the master bronze casters of Igun Street to create the Uhunmwu-Èlao — the royal commemorative head.Cast in shining bronze using the sacred lost-wax method, the head was not meant to be a perfect likeness, but a spiritual vessel. Upon its head sat a coral bead crown, heavy and regal, the same type worn by the Oba in life. Its eyes were wide and calm, watching over the realm, its lips closed in timeless dignity.These heads stood on altars in the royal palace, surrounded by ivory tusks carved with stories of the kingdom’s glory. They were offerings, reminders of past rulers whose spirits gave wisdom and protection to the living Oba. Each new reign added its own head to the altar, linking generations in an unbroken chain of authority and tradition.But in 1897, when the British invaded, many of these bronze heads were seized and carried away. Still, their presence is felt — in museums across the seas and in the hearts of the Edo people — as enduring symbols of kingship, artistry, and the sacred duty to remember.",
    },
    {
      id: "",
      src: "3abcd6919f9032fb6041e070cb4e45522eb4b342-3000x2000.avif",
      name: "Ikoro",
      english: "Armcuff",
      price: 1200,
      pronunciation: "",
      description:
        "In the royal courts of old Benin, beauty and power were worn not only in crowns and coral beads, but also in the gleam of cast metal upon the body. Among the finest of these ornaments was the Ikoro — the royal armcuff.Forged in brass or bronze by the master casters of Igun Street, the Ikoro was more than decoration. Its intricate patterns spoke of status, its weight of authority. Only the Oba, chiefs, warriors of high rank, or favored nobles could wear such a piece, for it was a sign that the wearer served close to the heart of the kingdom.In ceremonies, the Ikoro caught the sunlight as the wearer moved, a silent proclamation of wealth and honor. In war, it symbolized strength; in peace, it marked the dignity of the court. Often, it was given as a gift from the Oba himself, a gesture that bound the recipient in loyalty and service.When the British invasion came in 1897, many Ikoro armcuffs were seized along with the bronzes and ivory treasures. Today, they rest in faraway collections, but their patterns still whisper the story of Benin’s grandeur — when an arm was not just clothed in metal, but in the pride of a kingdom.",
    },
    {
      id: "",
      src: "Altar of the Hand Ikegobo.jpeg",
      name: "Ikegobo",
      english: "Altar of the Hand",
      price: 1200,
      pronunciation: "",
      description:
        "In the kingdom of Benin, a person’s hand was more than flesh and bone — it was the symbol of work, achievement, and honor. To celebrate great accomplishments, the Oba would commission the Ikegobo, the Altar of the Hand.Cast in bronze or carved in wood, the Ikegobo stood tall, often shaped like a cylinder. On its surface were figures of warriors, courtiers, and sometimes the owner himself, all telling the story of his service to the kingdom. At its center, the hand itself was honored — for in Benin belief, it is the hand that brings wealth, builds power, and performs deeds worthy of remembrance.The Ikegobo was placed in the home or shrine of the honored person, surrounded by offerings. It reminded the living of what had been achieved, and called on the ancestors to bless the hands of the present and future. Only those who had truly distinguished themselves — great warriors, titled chiefs, or the Oba’s most trusted servants — could receive one.When the British came in 1897, many Ikegobo were taken from the palace and noble homes. Yet their meaning remains in Edo hearts: a testament that in Benin, to honor the hand was to honor the life it shaped.",
    },
    {
      id: "",
      src: "3c3558d976276c6c5ff150dbb2155e98fa680d7e-1000x665.avif",
      name: "Oroka",
      english: "Finger Ring",
      price: 1200,
      pronunciation: "",
      description:
        "In the royal courts of Benin, even the smallest ornament carried great meaning. Among these was the Oroka — the finger ring. Worn by the Oba, chiefs, and nobles, it was far more than a piece of adornment; it was a mark of rank, loyalty, and sometimes, spiritual protection.Cast in brass, bronze, or even gold, the Oroka was made by the skilled hands of the Igun Street casters. Some were plain and heavy, others engraved with royal symbols — leopards for courage, mudfish for divine power, or intricate patterns that spoke of the wearer’s lineage. The size and design of a ring could quietly tell a story about the person who wore it.An Oroka might be given by the Oba as a reward for service, binding the recipient’s loyalty. In ceremonies, the flash of a ring on the hand was a sign of prestige. And just like the coral beads and armcuffs, these rings connected the wearer to the traditions of the palace.When the British invasion came in 1897, many Oroka rings, along with other royal treasures, were taken overseas. Yet in Benin memory, the Oroka still gleams — a reminder that in the kingdom’s days of glory, even a finger could bear the weight of honor.",
    },
    {
      id: "",
      src: "4befa979866c4fc7ecbd6cf411afda657adc081d-2858x4345.avif",
      name: "Uko",
      english: "Flask",
      price: 1200,
      pronunciation: "",
      description:
        "In the days of the mighty Obas, the palace of Benin was not only a place of power, but of refinement and beauty. Among the treasures crafted for the royal court was the Uko — the flask.Made of fine brass or bronze by the master casters of Igun Street, the Uko was more than a vessel. Its rounded body and narrow neck were often adorned with intricate patterns or figures, each telling a story of the kingdom’s wealth and artistry. Some bore images of leopards — symbols of royal strength — or mudfish, sacred to Olokun, the god of the sea and abundance.The Uko served in both ceremony and daily life within the palace. It held palm wine for sacred libations, water for ritual cleansing, or precious liquids for the Oba’s personal use. In grand festivals, attendants carried the flasks as part of the royal display, their polished surfaces catching the sun like gold.When the British forces invaded in 1897, many such flasks were taken from the royal treasury and scattered across the world. Today, the Uko rests in museums and private collections, yet it remains in Edo memory as a vessel not just for drink, but for the culture, status, and dignity of old Benin.",
    },
    {
      id: "",
      src: "4ef56ed1ef0f9fd8e0ad4d3859786d3fc2dd391a-1600x1797.avif",
      name: "Ama",
      english: "Relief Plaque",
      price: 1200,
      pronunciation: "",
      description:
        "Long ago, when the Obas of Benin ruled over a kingdom rich in trade and tradition, the walls of the royal palace spoke without words. They spoke through the Ama — the great relief plaques of bronze.Forged by the master casters of Igun Street using the sacred lost-wax method, each Ama was a window into the life of the court. They showed the Oba in his coral regalia, flanked by warriors, chiefs, attendants, and sometimes even Portuguese traders. Every figure, every symbol, was carved with purpose — leopards for strength, mudfish for divine authority, shields and spears for military might.These plaques were mounted on the wooden pillars of the Oba’s palace, forming a grand gallery that told the history, victories, and power of the kingdom. To walk among them was to read the story of Benin in shining metal. They were not mere decorations; they were records, teaching tools, and declarations of royal authority to all who entered the court.In 1897, when British forces invaded, hundreds of these plaques were torn from the palace walls and carried overseas. Today, they rest in museums around the world, but in Edo hearts, the Ama remains a proud testimony — that once, the walls of Benin were alive with bronze, and its history was written in metal.",
    },
    {
      id: "",
      src: "5a4f4e3a2dc2ef568f12a28c832b0f9570824a16-3336x3912.avif",
      name: "Ẹroro",
      english: "Bell",
      price: 1200,
      pronunciation: "",
      description:
        "In the royal court of Benin, sound was as important as sight. Among the treasures of the palace was the Ẹroro — the royal bell. Forged in fine brass or bronze by the master casters of Igun Street, it was not just an instrument, but a voice of authority.The Ẹroro called the court to order, announced the Oba’s arrival, and marked the rhythm of sacred ceremonies. Its tone was deep and commanding, carrying across the palace grounds like the voice of the ancestors themselves. In the Oba’s presence, no other bell could be sounded, for its ring was the symbol of his supreme power.Some Ẹroro were plain and dignified, others richly decorated with figures, animals, or patterns that told stories of the kingdom’s glory. In rituals, they were rung to invite the spirits, to honor the gods, or to signal moments of great importance.When the British invaded in 1897, many of these bells were seized along with other royal treasures. Today, they rest in museums across the world. Yet for the Edo people, the sound of the Ẹroro still lives on in memory — the call of a kingdom, the voice of tradition, and the unbroken echo of Benin’s greatness.",
    },
    {
      id: "",
      src: "ukhurhe-rattle staff.jpeg",
      name: "Ukhurhẹ",
      english: "Rattle staff",
      price: 1200,
      pronunciation: "",
      description:
        "In the ancient courts of Benin, memory was a sacred duty. The Ukhurhẹ — the rattle staff — stood as both a tool and a symbol of remembrance. Tall and slender, often carved from wood and tipped with a metal rattle, it was placed in the ancestral shrines of the Oba and titled chiefs.When a new reign began, the Oba would add his own Ukhurhẹ to the royal shrine, joining it to the line of staffs left by his forefathers. Each one marked a ruler’s time on the throne, a silent witness to the victories, festivals, and challenges of his reign. In ceremonies, the Ukhurhẹ was struck against the floor, its rattling sound calling the attention of the ancestors, asking their blessing and guidance.Some were simple in design, others richly carved with figures and symbols — leopards for strength, birds for spiritual vision, or geometric patterns of authority. Its purpose was not for battle, but for honoring those who came before and keeping their spirit present in the affairs of the living.When the British looted Benin in 1897, many Ukhurhẹ were taken along with the bronzes, ivory tusks, and other treasures. Yet their meaning survives: that in Benin, the rattle of the staff is the voice of the ancestors, and to hold it is to hold the memory of a kingdom.",
    },
    {
      id: "",
      src: "7d4b59902ef091ff2b11b658e7480d3dc7af2297-1139x1715.avif",
      name: "okpia",
      english: "male figure",
      price: 1200,
      pronunciation: "",
      description:
        "In the great kingdom of Benin, art was not made only for beauty — it was made to speak, to teach, and to honor. Among the most striking creations of the royal court was the Okpia — the carved or cast male figure.Made from bronze, ivory, or wood by the master craftsmen of Igun Street, the Okpia often stood as a guardian in the palace or as an offering on royal altars. His form was strong and upright, sometimes holding a sword, spear, or other symbols of rank. The face was calm yet commanding, the eyes wide in watchfulness — a protector for both the living and the spirits.Some Okpia figures represented past Obas, preserving their likeness for future generations. Others depicted warriors, chiefs, or even supernatural beings tied to the kingdom’s beliefs. Every detail — from the coral bead regalia to the leopard-skin patterns — told of the wearer’s status, achievements, and sacred duty.In festivals and rituals, the Okpia reminded the people of the strength, courage, and leadership that built the kingdom. When the British invaded in 1897, many of these figures were taken away, scattered into collections across the world. Yet in Edo memory, the Okpia still stands — firm as the spirit of Benin’s men of honor.",
    },
    {
      id: "",
      src: "Bronze head of queen ida.jpg",
      name: "",
      english: "Bronze head of queen ida",
      price: 1200,
      pronunciation: "",
      description:
        "In the golden age of the Benin Kingdom, there was a woman whose wisdom and courage shaped the fate of her people — Queen Idia, the mother of Oba Esigie. She was more than a mother; she was a warrior, a healer, and the Oba’s most trusted adviser.When enemies threatened Benin in the Idah War, Queen Idia’s strategy and spiritual power brought victory. Her leadership secured the throne for her son and ushered in a time of peace and prosperity. In gratitude and reverence, the Oba commanded the master bronze casters of Igun Street to create her likeness — the Bronze Head of Queen Idia.Cast with the sacred lost-wax technique, the head wears an elaborate beaded crown and coral regalia, symbols of her royal status. The face is serene yet strong, the eyes large and watchful, capturing both her beauty and authority. These bronze heads were placed on altars dedicated to the Iyoba (Queen Mother), where offerings were made to honor her spirit and seek her protection over the kingdom.When the British invaded in 1897, many of these bronze heads, along with countless other treasures, were seized and taken overseas. Today, the Bronze Head of Queen Idia stands in museums around the world, but for the Edo people, it is more than art — it is a memory of a queen whose strength was as enduring as bronze.",
    },
    {
      id: "",
      src: "Leopard Figures.jpg",
      name: "Ẹkpẹn",
      english: "Leopard Figures",
      price: 1200,
      pronunciation: "",
      description:
        "In the royal court of Benin, no animal stood as proudly in symbol as the leopard — Ẹkpẹn in Edo. The leopard was the Oba’s emblem, the ‘king of the forest,’ just as the Oba was the king of the people. To harm a leopard without royal permission was to challenge the Oba himself.The master casters of Igun Street shaped the leopard in shining brass or bronze, their bodies sleek and spotted with carefully punched rosettes. Some stood life-sized, guarding palace gateways; others were smaller, gracing royal altars. Their open jaws, sometimes fitted with metal tongues or holding bells, reminded all of the leopard’s swiftness and deadly strength.The leopard symbolized the Oba’s balance of wisdom and power — gentle when at peace, fierce when provoked. In rituals, the figures were used to invoke this royal authority, sometimes linked to the war guilds and the protection of the kingdom.When the British forces came in 1897, many of these leopard figures were taken alongside the plaques, altars, and regalia. Today, they rest in museums far from home, yet in Edo tradition, the leopard still prowls in memory — the silent guardian of the throne and a reminder that power, like the leopard, moves with grace and strikes with certainty.",
    },
    {
      id: "",
      src: "Benin Bronze Boxes Ebo.avif",
      name: "Ebo",
      english: "Benin Bronze Boxes",
      price: 1200,
      pronunciation: "",
      description:
        "In the treasure rooms of the Benin royal palace, among the coral beads and ivory tusks, rested the Ebo — the bronze boxes of the kingdom. Cast by the master guild of Igun Street, these boxes were more than containers; they were guardians of sacred and royal possessions.Made from heavy brass or bronze, their surfaces were alive with intricate designs — warriors in procession, leopards in mid-stride, Portuguese traders offering goods, and symbols of divine authority. Each image told a story, each pattern spoke of the Oba’s wealth, power, and connection to the spiritual world.The Ebo held precious regalia, charms, or court documents, keeping them safe in both the physical and spiritual sense. Some were used in rituals, their contents blessed for protection or prosperity. Only the highest ranks in the court could possess such boxes, for they were marks of great honor and privilege.When the British forces invaded in 1897, the Ebo, like so many treasures of Benin, were taken overseas. Today, they rest in museums and private collections, but in Edo memory, they remain symbols of a kingdom where even the containers of wealth were works of art — and every bronze box was itself a treasure.",
    },
    {
      id: "",
      src: "Benin Court Jesters or Dwarfs Figures.jpg",
      name: "",
      english: "Benin Court Dwarfs Figures",
      price: 1200,
      pronunciation: "",
      description:
        "In the grand halls of the Benin royal palace, every person had a place and a purpose — and among the most curious and honored were the court dwarfs. Known for their unique stature and sharp wit, they were more than entertainers; they were close companions to the Oba, keepers of palace secrets, and sometimes messengers of his will.The master artists of Igun Street cast these figures in bronze, capturing their distinct features with care — short but strong bodies, expressive faces, and sometimes holding gifts, weapons, or royal emblems. On the relief plaques and as free-standing sculptures, they appear alongside warriors, chiefs, and even the Oba himself, a sign of their respected place in court life.In Edo belief, the unusual form of the dwarf was seen as a mark of spiritual connection. They were thought to carry blessings and serve as living symbols of loyalty. Their presence in art was not mockery but honor, showing the diversity of those who served the throne.When the British invaded in 1897, many of these court dwarf figures were taken away, scattered to museums across the world. Yet in Edo memory, they remain part of the living story of Benin — a reminder that in the Oba’s palace, greatness was measured not in height, but in service and loyalty.",
    },
    {
      id: "",
      src: "Benin Royal Altars.jpg",
      name: "",
      english: "Benin Royal Altars",
      price: 1200,
      pronunciation: "",
      description:
        "At the heart of the Benin royal palace stood the Royal Altars — sacred spaces where the living Oba communed with the spirits of the kings who came before him. Made of packed earth or carved stone, these altars were not bare; they were crowned with gleaming bronze heads of past Obas, towering ivory tusks etched with royal history, and sacred objects such as leopards, bells, and swords.Each new Oba, upon ascending the throne, built an altar to honor his father, for it was believed that the strength of a ruler came from the blessings of his ancestors. On festival days and in important rituals, the Oba and the royal priests placed offerings of kola nuts, palm wine, and animal sacrifices on these altars. The bronze heads served as vessels for the spirits, while the tusks spoke silently through their carved stories.The Royal Altars were both political and spiritual — a reminder that the Oba’s authority came not only from earthly power but also from divine lineage. They bound the kingdom’s past and present, making the palace a living history book told through bronze, ivory, and ritual.When the British invaded in 1897, many altar pieces were taken, leaving empty spaces where spirits were once called. Yet in Edo tradition, the idea of the Royal Altar lives on, for as long as the Oba reigns, the link between the living and the ancestors cannot be broken.",
    },
    {
      id: "",
      src: "Bronze Canoe Scenes.jpg",
      name: "",
      english: "Bronze Canoe Scenes",
      price: 1200,
      pronunciation: "",
      description:
        "Among the treasures of the Benin royal palace were bronze plaques and sculptures that told stories of the kingdom’s power, trade, and far-reaching influence. Among these, the Bronze Canoe Scenes stood out — long, elegant depictions of men paddling canoes, sometimes laden with goods, sometimes carrying warriors, envoys, or traders.These scenes spoke of Benin’s mastery of its waterways — the rivers that linked the capital to distant markets and coastal ports. Canoes carried pepper, ivory, cloth, and even messages for the Oba, moving swiftly between inland towns and the ocean’s edge. In the bronzes, paddlers are shown in rhythmic motion, their arms poised mid-stroke, their canoes cutting through imagined waters.Some canoe scenes also carried symbolic meaning: they were reminders of Benin’s control over trade routes, its openness to exchange with far-off lands, and its ability to project power far beyond its walls. Foreign traders — Portuguese, Dutch, or others — sometimes appear in these works, a nod to the era when Benin was a major player in the global web of commerce.When the British came in 1897, many of these canoe bronzes were seized and scattered to museums across the world. Yet for the Edo people, they remain memories cast in metal — images of movement, connection, and a kingdom whose power flowed like a great river.",
    },
    {
      id: "",
      src: "Bronze Horseman Figure.jpeg",
      name: "",
      english: "Bronze Horseman Figure",
      price: 1200,
      pronunciation: "",
      description:
        "In the proud art of Benin, the Bronze Horseman Figure stands as a rare and powerful image. Horses were not native to the rainforest kingdom, but they were prized gifts brought through northern trade routes, symbols of wealth, prestige, and military might. Only the highest-ranking warriors and nobles could ride them, often during war campaigns or grand processions.The bronze horseman, cast by the guild of Igun Street, shows a rider upright and commanding, often wearing coral bead regalia and carrying weapons or emblems of authority. The horse itself is stylized — tall, with strong legs and an arched neck — not just an animal, but a living throne for its master.Such figures celebrated the Oba’s ability to command resources from far beyond his borders, and to lead warriors whose strength extended even into the savannah lands where horses thrived. They were also placed on royal altars as symbols of leadership, courage, and the reach of Benin’s influence.When the British forces stormed the city in 1897, these horseman bronzes, like so many other treasures, were taken overseas. Today they stand in museums, but for the Edo people, they still gallop in memory — reminders of a kingdom whose power could not be contained by forest or field.",
    },
    {
      id: "",
      src: "Ceremonial Bronze Trumpets.webp",
      name: "",
      english: "Ceremonial Bronze Trumpets",
      price: 1200,
      pronunciation: "",
      description:
        "In the royal court of Benin, sound was power — and few sounds carried more weight than the deep, ringing call of the Ceremonial Bronze Trumpet. Cast by the skilled hands of the Igun Street guild, these trumpets were not simple instruments; they were voices of the palace, summoning attention, marking sacred rituals, and announcing the presence of the Oba himself.Shaped from gleaming bronze, some trumpets were straight and long, others curved or ornately decorated with figures of leopards, crocodiles, or warriors. These designs were not just decoration — each carried a spiritual meaning, linking the Oba to the strength of the leopard or the cunning of the crocodile.In ceremonies, court musicians blew the trumpets in slow, commanding rhythms, the sound echoing through palace courtyards and out into the city. They were played during festivals, processions, and at the royal altars, their tones believed to carry prayers and praises to the ancestors.The trumpets were also symbols of authority. To hear their call was to be reminded that the Oba’s voice ruled over all. After the British invasion in 1897, many of these trumpets were taken abroad, silencing them in their homeland. Yet in Edo memory, their sound still lingers — a bronze breath of kingship, ceremony, and unbroken tradition.",
    },
    {
      id: "",
      src: "Coral Beaded Crowns and Regalia.jpg",
      name: "",
      english: "Coral Beaded Crown",
      price: 1200,
      pronunciation: "",
      description:
        "In the splendor of the Benin royal court, nothing proclaimed the Oba’s divine authority more clearly than the Coral Beaded Crown. Woven from thousands of red coral beads, it was not merely a headpiece — it was the very emblem of kingship.The coral came from distant seas, brought to Benin through trade with Portuguese and later European merchants. In Edo belief, its deep red color symbolized life, power, and the bloodline of the kings. Each bead was sacred, believed to carry protective and spiritual energy.The crown’s design often rose tall, sometimes with a beaded flap covering the Oba’s face, allowing him to appear before his people as a living god, partly hidden from mortal eyes. When the Oba wore it, along with his coral-beaded tunic and regalia, he became the bridge between the living and the ancestors.It was worn on the most important occasions — coronations, festivals, and rituals at the royal altars. To touch it without permission was forbidden, for it was not just royal property; it was the spiritual seat of the kingdom’s power.Even after the 1897 British invasion, when much of Benin’s treasure was scattered, the tradition of the coral beaded crown endured. Today, it still sits upon the head of the reigning Oba, a bright red flame of history, unbroken through centuries.",
    },
    {
      id: "",
      src: "Ivory Horn Okelé.jpeg",
      name: "Okelé",
      english: "Ivory Horn",
      price: 1200,
      pronunciation: "",
      description:
        "In the royal palace of Benin, sound carried meaning, and few instruments spoke with more dignity than the Okelé, the ivory horn. Carved from the tusk of an elephant — a creature of great power and royal symbolism — the horn was both a musical instrument and a sacred object.The ivory surface was often etched with intricate patterns or figures, telling stories of kings, warriors, and the spirits that guided the kingdom. When blown, the Okelé released a deep, resonant tone that rolled across palace courtyards, summoning chiefs, marking the start of rituals, or announcing the arrival of the Oba.In Edo tradition, the Okelé was more than sound — it was a voice of the ancestors. Court musicians played it at royal festivals, war victories, and sacred ceremonies, its tone believed to carry prayers to the spirit world. Because ivory was precious, each horn was handled with care, stored in the palace, and only brought out for important events.After the 1897 British invasion, many Okelé were taken overseas, silencing them in their homeland. But their memory still echoes in Benin — the call of ivory that once spoke for kings",
    },
    {
      id: "",
      src: "Portuguese Soldier Figures.jpg",
      name: "",
      english: "Portuguese Soldier Figures",
      price: 1200,
      pronunciation: "",
      description:
        "Among the treasures of the Benin Kingdom, the Portuguese Soldier Figures stand as bronze witnesses to a remarkable chapter of history. Cast in intricate detail by the royal brass-casters of Igun Street, these figures show men with European features — pointed beards, plumed hats, muskets, and armor — frozen in mid-step as if guarding the palace forever.They recall the 15th and 16th centuries, when Portuguese traders first arrived at Benin’s shores. The Portuguese brought coral beads, brass, firearms, and luxury goods, exchanging them for ivory, pepper, and other treasures of the Edo kingdom. Their presence left such a mark that they became symbolic in Benin art — not just as foreigners, but as spiritual allies and symbols of wealth and far-reaching influence.In court rituals, these soldier figures were placed on royal altars and palace walls, where they served both as decoration and as reminders of the Oba’s control over international trade. Some scholars believe they also represented supernatural protectors, their foreign weapons and armor making them ideal guardians in the symbolic world.When the British invasion of 1897 scattered the palace treasures, many Portuguese soldier bronzes were taken to museums abroad. Yet in Edo memory, they still march — bronze emissaries from a time when the Benin Kingdom’s influence reached across oceans.",
    },
    {
      id: "",
      src: "Royal Swords Ada and Eben.webp",
      name: "Ada and Eben",
      english: "Royal Swords",
      price: 1200,
      pronunciation: "",
      description:
        "In the grandeur of the Benin Kingdom, power was not only spoken — it was displayed. Two of the most important symbols of that power were the Ada and Eben, the royal swords of the Edo people.The Ada was a great ceremonial sword, broad and impressive, carried upright by high chiefs during royal processions. It was never meant for battle; instead, it was the emblem of authority and victory. In court rituals, it stood for the Oba’s supreme power, often held in front of him like a shining wall of protection.The Eben, smaller and fan-shaped, was the sword of honor and celebration. Its blade flared outward, and during ceremonies, it was waved from side to side in graceful motions. Chiefs would use the Eben in dances to salute the Oba or to mark moments of joy, the movement catching the sunlight and dazzling the crowd.Together, Ada and Eben told a story — strength and authority balanced with joy and unity. They were present at coronations, festivals, and palace gatherings, held only by those entrusted with the kingdom’s highest responsibilities.Even after the upheaval of 1897, their symbolism endured. Today, the Ada and Eben are still carried in the Benin royal court, their polished blades linking modern Edo royalty to centuries of tradition.",
    },
  ];

  /* -------------------------
     Helpers + DOM queries
     ------------------------- */
  function getQueryParam(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
  }

  const index = Math.max(
    0,
    Math.min(artifacts.length - 1, parseInt(getQueryParam("index"), 10) || 0),
  );
  const artifact = artifacts[index];

  const detailImage = document.getElementById("detail-image");
  const detailInfo = document.getElementById("detail-info");
  const modal = document.getElementById("zoom-modal");
  const modalImg = document.getElementById("zoom-img");
  const closeBtn = document.getElementById("zoom-close");
  const pipContainer = document.getElementById("pip-container");
  const pipImg = document.getElementById("pip-img");

  // Bail out gracefully if the core containers aren't on the page
  if (!detailImage || !detailInfo) {
    console.warn(
      "artifact-detail.js: #detail-image or #detail-info not found on page.",
    );
    return;
  }

  /* -------------------------
     Render artifact or fallback
     ------------------------- */
  if (artifact) {
    detailImage.innerHTML = `
  <img 
    src="image/artifact/${artifact.src}" 
    alt="${artifact.name || artifact.english}" 
    id="artifact-img"
    style="cursor: zoom-in;"
    onerror="this.onerror=null;this.src='image/artifact/default.jpg';"
  >
  <span class="frame-corner tl"></span>
  <span class="frame-corner tr"></span>
  <span class="frame-corner bl"></span>
  <span class="frame-corner br"></span>
`;
    const displayName =
      artifact.name && artifact.name.trim() !== "" ? artifact.name : "—";
    const pronounceTarget = (artifact.english || displayName || "").replace(
      /'/g,
      "\\'",
    );

    // FIX: removed the stray literal "..." that was previously rendered
    // between the <h2> and the Pronounce button.
    detailInfo.innerHTML = `
  <p class="artifact-eyebrow">Edo Kingdom · Bronze &amp; Ivory</p>
  <h1>${displayName}</h1>
  <h2>${artifact.english}</h2>
      <div class="click">
        <button class="but2" onclick="pronounce('${pronounceTarget}')">🔊 Pronounce</button>
      </div>
      <p class="artifact-description"><b>Description:</b> <span id="artifact-description-text"></span></p>

      <div id="artifact-chat" class="artifact-chat">
        <h3 class="artifact-chat-title">Ask about this artifact</h3>
        <div id="artifact-chat-messages" class="artifact-chat-messages"></div>
        <form id="artifact-chat-form" class="artifact-chat-form">
          <input
            type="text"
            id="artifact-chat-input"
            class="artifact-chat-input"
            placeholder="Ask a question about ${(artifact.english || displayName || "this artifact").replace(/"/g, "&quot;")}..."
            autocomplete="off"
          />
          <button type="submit" class="btn artifact-chat-send">Ask</button>
        </form>
      </div>
    `;

    typeWriterEffect(
      document.getElementById("artifact-description-text"),
      artifact.description || "No description provided.",
    );

    initArtifactChat(artifact);
  } else {
    detailImage.innerHTML = "";
    detailInfo.innerHTML = `<p>Artifact not found.</p>`;
    return;
  }

  /* -------------------------
     Pronounce (shared with listing page)
     ------------------------- */
  window.pronounce = function (name) {
    try {
      const utterance = new SpeechSynthesisUtterance(name);
      speechSynthesis.speak(utterance);
    } catch (e) {
      console.warn("Speech synthesis not available:", e);
    }
  };

  /* -------------------------
     Typewriter animation for the description
     ------------------------- */
  function typeWriterEffect(targetEl, fullText, speed = 18) {
    if (!targetEl) return;
    targetEl.textContent = "";
    let i = 0;

    // Respect users who've asked for reduced motion — just show it instantly
    const prefersReducedMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      targetEl.textContent = fullText;
      return;
    }

    function step() {
      if (i < fullText.length) {
        targetEl.textContent += fullText.charAt(i);
        i++;
        setTimeout(step, speed);
      }
    }
    step();
  }

  /* -------------------------
     AI Q&A chat widget
     ------------------------- */
  function initArtifactChat(artifact) {
    const form = document.getElementById("artifact-chat-form");
    const input = document.getElementById("artifact-chat-input");
    const messages = document.getElementById("artifact-chat-messages");
    if (!form || !input || !messages) return;

    // Point this at your backend route. See spec: POST /api/artifact-chat
    const CHAT_ENDPOINT = "/api/artifact-chat";

    let history = [];
    let isSending = false;

    function appendMessage(role, text) {
      const bubble = document.createElement("div");
      bubble.className =
        "artifact-chat-bubble " +
        (role === "user"
          ? "artifact-chat-bubble-user"
          : "artifact-chat-bubble-ai");
      bubble.textContent = text;
      messages.appendChild(bubble);
      messages.scrollTop = messages.scrollHeight;
      return bubble;
    }

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const question = input.value.trim();
      if (!question || isSending) return;

      appendMessage("user", question);
      input.value = "";
      isSending = true;

      const loadingBubble = appendMessage("ai", "Thinking...");

      try {
        const res = await fetch(CHAT_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            artifactName: artifact.name || "",
            artifactEnglish: artifact.english || "",
            artifactDescription: artifact.description || "",
            question,
            history,
          }),
        });

        const data = await res.json().catch(() => ({}));

        if (!res.ok || !data.answer) {
          loadingBubble.textContent =
            (data && data.error) ||
            "Sorry, I couldn't get an answer right now. Please try again.";
        } else {
          loadingBubble.textContent = data.answer;
          history.push({ role: "user", content: question });
          history.push({ role: "assistant", content: data.answer });
        }
      } catch (err) {
        console.warn("artifact-chat request failed:", err);
        loadingBubble.textContent =
          "Sorry, something went wrong reaching the AI. Please try again.";
      } finally {
        isSending = false;
      }
    });
  }

  /* -------------------------
     Ensure PiP is inside detail-image container
     ------------------------- */
  if (
    pipContainer &&
    detailImage &&
    pipContainer.parentElement !== detailImage
  ) {
    detailImage.appendChild(pipContainer);
  }

  /* -------------------------
     Modal zoom behavior
     ------------------------- */
  const mainImg = document.getElementById("artifact-img");
  if (mainImg && modal && modalImg && closeBtn) {
    mainImg.addEventListener("click", () => {
      modal.style.display = "flex";
      modalImg.src = mainImg.src;
      modalImg.alt = mainImg.alt;
    });

    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.style.display = "none";
    });
  }

  /* -------------------------
     PiP (top-right of image) logic
     ------------------------- */
  if (!mainImg || !pipContainer || !pipImg) return;

  const ZOOM_FACTOR = 3;
  // Fallback delay (ms) in case the browser never fires transitionend
  // (e.g. no CSS transition defined on the property being watched).
  // Prevents the magnifier from getting stuck visible after mouseleave.
  const HIDE_FALLBACK_MS = 300;

  let renderedWidth = 0;
  let renderedHeight = 0;
  let renderedOffsetX = 0;
  let renderedOffsetY = 0;
  let hideFallbackTimer = null;

  function computeRenderedImageRect() {
    // FIX: mainImg uses object-fit: cover, which always fills its box
    // completely with no letterboxing — the previous version computed
    // "contain"-style dimensions (a smaller inset rect with offsets),
    // which is the wrong model for a cover image and was the reason the
    // magnifier showed the whole picture shrunk down instead of a true
    // zoomed crop. For cover, the visible rendered rect IS the box.
    const r = mainImg.getBoundingClientRect();
    renderedWidth = r.width;
    renderedHeight = r.height;
    renderedOffsetX = 0;
    renderedOffsetY = 0;
    return {
      rect: r,
      renderedWidth,
      renderedHeight,
      renderedOffsetX,
      renderedOffsetY,
    };
  }

  // Sync pip image src with main image src
  pipImg.src = mainImg.src;

  function showPiP() {
    if (hideFallbackTimer) {
      clearTimeout(hideFallbackTimer);
      hideFallbackTimer = null;
    }
    const { renderedWidth, renderedHeight } = computeRenderedImageRect();
    // FIX: set BOTH width and height to the zoomed size (not height:auto).
    // pip-img now has object-fit:cover (see CSS), so at these dimensions
    // it crops itself exactly the way mainImg does — just enlarged —
    // instead of falling back to its own natural aspect ratio.
    pipImg.style.width = Math.round(renderedWidth * ZOOM_FACTOR) + "px";
    pipImg.style.height = Math.round(renderedHeight * ZOOM_FACTOR) + "px";

    pipContainer.style.display = "flex";
    requestAnimationFrame(() => pipContainer.classList.add("active"));
  }

  function hidePiP() {
    pipContainer.classList.remove("active");

    const onEnd = (e) => {
      if (e.propertyName === "opacity") {
        pipContainer.style.display = "none";
        pipContainer.removeEventListener("transitionend", onEnd);
        if (hideFallbackTimer) {
          clearTimeout(hideFallbackTimer);
          hideFallbackTimer = null;
        }
      }
    };
    pipContainer.addEventListener("transitionend", onEnd);

    // Fallback in case no CSS transition fires transitionend at all —
    // without this, pipContainer could stay display:flex forever.
    hideFallbackTimer = setTimeout(() => {
      pipContainer.style.display = "none";
      pipContainer.removeEventListener("transitionend", onEnd);
      hideFallbackTimer = null;
    }, HIDE_FALLBACK_MS);
  }

  function onMove(e) {
    const {
      rect,
      renderedWidth,
      renderedHeight,
      renderedOffsetX,
      renderedOffsetY,
    } = computeRenderedImageRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Cursor outside visible image area: hide PiP
    if (
      x < renderedOffsetX ||
      y < renderedOffsetY ||
      x > renderedOffsetX + renderedWidth ||
      y > renderedOffsetY + renderedHeight
    ) {
      hidePiP();
      return;
    }

    // Cursor inside visible image: show PiP
    showPiP();

    const relativeX = x - renderedOffsetX;
    const relativeY = y - renderedOffsetY;

    const xPercent = relativeX / renderedWidth;
    const yPercent = relativeY / renderedHeight;

    const pipW = pipContainer.clientWidth;
    const pipH = pipContainer.clientHeight;
    const imgW = pipImg.offsetWidth;
    const imgH = pipImg.offsetHeight;

    const maxX = Math.max(0, imgW - pipW);
    const maxY = Math.max(0, imgH - pipH);

    const left = Math.min(maxX, Math.max(0, xPercent * imgW - pipW / 2));
    const top = Math.min(maxY, Math.max(0, yPercent * imgH - pipH / 2));

    pipImg.style.transform = `translate(${-left}px, ${-top}px)`;
  }

  // FIX: listen on the outer frame (#detail-image), not just the <img>.
  // The PiP box is visually layered on top of the image's top-right corner,
  // so listening only on mainImg caused spurious mouseleave events the
  // instant the cursor crossed onto the magnifier itself, killing it
  // right when it should have been most useful.
  detailImage.addEventListener("mouseenter", showPiP);
  detailImage.addEventListener("mouseleave", hidePiP);
  mainImg.addEventListener("mousemove", onMove);

  window.addEventListener("resize", () => {
    if (pipContainer.classList.contains("active")) {
      const { renderedWidth, renderedHeight } = computeRenderedImageRect();
      pipImg.style.width = Math.round(renderedWidth * ZOOM_FACTOR) + "px";
      pipImg.style.height = Math.round(renderedHeight * ZOOM_FACTOR) + "px";
    }
  });
});