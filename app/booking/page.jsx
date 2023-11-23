"use client";
import {initFlowbite} from "flowbite";
import {Button} from "flowbite-react";
import Image from "next/image";
import {useEffect, useState} from "react";
import Filter from "./components/Filter";
import Details from "./components/Details";
import axios from "axios";

export default function page() {
    const [place, setPlace] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [filterTitle, setFilterTitle] = useState('');
    const [tags, setTags] = useState('Surabaya');

    const getData = async () => {
        const response = await axios.get(process.env.NEXT_PUBLIC_API_URL + "/api/v1/admin/place");
        setPlace(response.data.data);

        const filter = [];
        response.data.data.map(item => {
            filter.push(item);
        })

        setFilteredData(filter);
    }

    const handleFilterData = () => {
        if(filterTitle == ''){
            return
        }

        const placeData = [...place];
        const result = placeData.filter(item =>
            item.title.toLowerCase().includes(key.toLowerCase())
        );

        setFilteredData(result)
    }

    useEffect(() => {
        let ignore = false;
        if(!ignore){
            getData();
        }

        initFlowbite();

        return () => ignore = true;
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
                <Filter setFilterTitle={setFilterTitle} />
                <Details data={[...filteredData]} handleFilterData={handleFilterData} />
            </div>
        </div>
    );
}
