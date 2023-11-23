"use client";
import {initFlowbite} from "flowbite";
import {Button} from "flowbite-react";
import Image from "next/image";
import {useEffect, useState} from "react";
import Filter from "./components/Filter";
import Details from "./components/Details";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import axios from "axios";

export default function page() {
    const [place, setPlace] = useState([])
    const getData = async () => {
        const response = await axios.get(process.env.NEXT_PUBLIC_API_URL + "/api/v1/admin/place");
        setPlace(response.data.data)
    }

    useEffect(() => {
        initFlowbite();
        getData();
    }, []);
    return (
        <div className="bg-white">
            <Button
                className="bg-[#D90027] fixed z-20 bottom-0 right-0 m-5 rounded-full w-[50px] h-[50px]"
            >
                <Image
                    alt="image"
                    src={"/static/img/icon-float-btn.svg"}
                    width={150}
                    height={150}
                />
            </Button>
            <div>
                <Filter data={place}/>
                {/*<Details/>*/}
            </div>
        </div>
    );
}
