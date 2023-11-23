import React, { useEffect, useState } from "react";
import FAQ from "react-faq-component";
import Container from "../Container";
import { Lexend_Peta } from "next/font/google";
import Link from "next/link";
import { FaCaretDown } from "react-icons/fa";

const lexend_peta = Lexend_Peta({ subsets: ['latin'], weight: ['400', '700'] })
const data = {
    title: "",
    rows: [
        {
            title: "Lorem ipsum dolor sit amet,",
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
              Fusce sed commodo purus, at tempus turpis.`,
        },
        {
            title: "Nunc maximus, magna at ultricies elementum",
            content:
                "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
        },
        {
            title: "Curabitur laoreet, mauris vel blandit fringilla",
            content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
        },
        {
            title: "What is the package version",
            content: <p>current version is 1.2.1</p>,
        },
    ],
};

const styles = {
    titleTextColor: "black",
    rowTitleColor: "black",
    arrowColor: "#D90027",
};

const config = {
    animate: true,
    expandIcon: "+",
    collapseIcon: "x",
    tabFocus: true
};

const Faq = () => {
    return (
        <Container>
            <div className="py-32">
                <div className="md:px-32 text-center flex flex-col gap-8 items-center">
                    <h2 className={`text-primary font-semibold ${lexend_peta.className} md:text-2xl text-xl uppercase`}>FAQ</h2>
                    <h2 className="font-bold text-2xl md:text-4xl uppercase">*Masih Ragu?</h2>
                    <span className="text-lg xl:text-xl">Kami menjawab apa yang menjadi pertanyaan Anda. Semoga membantu.</span>
                </div>
                <div className="py-16 px-8">
                    <FAQ
                        title
                        data={data}
                        styles={styles}
                        config={config}
                    />
                </div>
                <div className="flex justify-center">

                    <Link
                        href={"#"}
                        className="">

                        <h2 className="flex items-center text-white rounded-full bg-primary p-4 px-8 gap-2">Lebih Banyak <span><FaCaretDown className="text-white" /></span> </h2>

                    </Link>
                </div>
            </div>
        </Container>
    );
}

export default Faq;
