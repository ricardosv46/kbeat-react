import { cleanHtml } from "util/cleanHtml";

const schemaAuthorPage = (data, articlesData) => {
    const arrayMetadata = data?.metadata ?? [];
    let url_photo = "";
    let email = "";

    for (let index = 0; index < arrayMetadata.length; index++) {
       
        if (arrayMetadata[index]?.key === "url_photo") {
            url_photo = arrayMetadata[index]?.value;
        }
        if (arrayMetadata[index]?.key === "email" && arrayMetadata[index]?.value) {
            email = arrayMetadata[index]?.value;
        }
    }

    let showSchema = null;
    if (Object.keys(data).length && data) {
        let name_info_autor = `${data?.fullname || ""}`,
            url_info_autor = data?.slug ? `https://larepublica.pe${data?.slug}` : "",
            descripton_info_autor = cleanHtml(data?.data?.description || "Redacción LR"),
            image_info_autor =
                url_photo ||
                "https://larepublica.pe/resizer/3KAU2WunY-i2T7mJEn9_Hti5DNc=/130x130/top/smart/s3.amazonaws.com/arc-authors/gruporepublica/5c0b3df8-490f-4b2d-916a-7181d6dc24b6.png",
            notes_info_autor = articlesData.slice(0, 10),
            setItemList = [];

        notes_info_autor.forEach((note, index) => {
            let url = note?.slug ? `https://larepublica.pe${note?.slug}` : "https://larepublica.pe/";
            setItemList.push({
                "@context": "http://schema.org",
                "@type": "ListItem",
                url: url,
                position: index + 1,
            });
        });

        const Person = {
            "@context": "http://schema.org/",
            "@type": "Person",
            name: name_info_autor,
            url: url_info_autor,
            image: image_info_autor,
            workLocation: {
                "@type": "Place",
                name: "Lima, Perú",
            },
            description: descripton_info_autor,
            contactPoint: {
                "@type": "ContactPoint",
                contactType: "Journalist",
                email: email || "mesadigital@glr.pe",
            },
            email: email || "mesadigital@glr.pe",
            worksFor: {
                "@type": "Organization",
                name: "La República Perú",
            },
            knowsAbout: "",
            knowsLanguage: [
                {
                    "@type": "Language",
                    name: "Español e inglés",
                },
            ],
            sameAs: [url_info_autor],
            jobTitle: "Periodista",
        };

        const CollectionPage = {
            "@context": "http://schema.org/",
            "@type": "CollectionPage",
            mainEntityOfPage: url_info_autor,
            url: url_info_autor,
            name: name_info_autor,
            author: {
                "@context": "http://schema.org",
                "@type": "Person",
                description: descripton_info_autor,
                image: {
                    "@context": "http://schema.org",
                    "@type": "ImageObject",
                    url: image_info_autor,
                },
                url: url_info_autor,
                name: name_info_autor,
                sameAs: [url_info_autor],
            },
            mainEntity: {
                "@context": "http://schema.org",
                "@type": "ItemList",
                itemListElement: setItemList,
                numberOfItems: setItemList.length,
            },
            publisher: {
                "@id": "https://larepublica.pe/",
            },
            copyrightHolder: {
                "@id": "https://larepublica.pe/",
            },
            sourceOrganization: {
                "@id": "https://larepublica.pe/",
            },
            copyrightYear: new Date().getFullYear(),
        };

        const NewsMediaOrganization = {
            "@context": "http://schema.org",
            "@type": "NewsMediaOrganization",
            name: "La República Perú",
            logo: {
                "@context": "http://schema.org",
                "@type": "ImageObject",
                url: `${process.env.SITE_DOMAIN_URL}${process.env.LOGO_PUBLISHER}`,
                height: 60,
                width: 296,
            },
            url: "https://larepublica.pe/",
            "@id": "https://larepublica.pe/",
            diversityPolicy: "https://larepublica.pe/politicas-y-estandares/#diversidad-en-la-redaccion",
            ethicsPolicy: "https://larepublica.pe/politicas-y-estandares/#principios-eticos",
            masthead: "https://larepublica.pe/politicas-y-estandares/#equipo-editorial",
            foundingDate: "1981",
            sameAs: "https://es.wikipedia.org/wiki/La_Rep%C3%BAblica_(Per%C3%BA)",
        };

        showSchema = (
            <>
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(CollectionPage) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(NewsMediaOrganization) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(Person) }} />
            </>
        );
    }

    return showSchema;
};

export default schemaAuthorPage;
