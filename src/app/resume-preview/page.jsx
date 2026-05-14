"use client";

import { useEffect, useState } from "react";

// IMPORT ALL TEMPLATES
import ClassicPreview from "@/components/preview/ClassicPreview";
import ModernPreview from "@/components/preview/ModernPreview";
import CreativePreview from "@/components/preview/CreativePreview";
import ProfessionalPreview from "@/components/preview/ProfessionalPreview";

export default function ResumePreviewPage() {

    // STORE RESUME DATA
    const [data, setData] = useState(null);

    // STORE TEMPLATE NAME
    const [selectedTemplate, setSelectedTemplate] =
        useState(null);

    // LOAD DATA FROM LOCAL STORAGE
    useEffect(() => {

        const storedData =
            localStorage.getItem("resumeData");

        const storedTemplate =
            localStorage.getItem("selectedTemplate");

        // RESUME DATA
        if (storedData) {

            setData(
                JSON.parse(storedData)
            );

        }

        // TEMPLATE NAME
        if (storedTemplate) {

            setSelectedTemplate(
                storedTemplate
            );

        }

    }, []);

    // LOADING STATE
    if (!data) {

        return (

            <main
                className="
                    min-h-screen
                    flex
                    items-center
                    justify-center
                    bg-gray-100
                "
            >

                <div className="text-center">

                    <h2
                        className="
                            text-2xl
                            font-bold
                            text-gray-800
                        "
                    >
                        Loading Resume...
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Please wait a moment
                    </p>

                </div>

            </main>

        );

    }

    // TEMPLATE SWITCH FUNCTION
    const renderTemplate = () => {

        switch (selectedTemplate) {

            case "modern":
                return <ModernPreview data={data} />;

            case "creative":
                return <CreativePreview data={data} />;

            case "professional":
                return <ProfessionalPreview data={data} />;

            case "classic":
            default:
                return <ClassicPreview data={data} />;

        }

    };

    // SHOW TEMPLATE
    return (

        <main
            className="
                min-h-screen
                bg-gray-100
            "
        >

            {renderTemplate()}

        </main>

    );

}