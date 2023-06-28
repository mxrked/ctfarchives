/**
 *
 *  This is the samples page
 *
 */

// React/Next Imports
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// Library Imports

// Data/Functions/Images Imports

// Component Imports
import { Navigation } from "../../assets/components/global/Nav/Navigation";
import { SampleEmbed } from "@/assets/components/pages/Samples/SampleEmbed";
import { SampleDetails } from "@/assets/components/pages/Samples/SampleDetails";

// Style Imports

export async function getStaticPaths() {
  try {
    const ALL_SAMPLES = await fetch(
      "https://raw.githubusercontent.com/mxrked/ctfarchives_cdn/main/files/json/SAMPLES.json"
    );

    if (!ALL_SAMPLES.ok) {
      throw new Error("Failed to fetch data from the JSON endpoint");
    }

    // Parsing the data
    const ALL_SAMPLES_DATA = await ALL_SAMPLES.json();

    // Generating all sample pages/paths
    const paths = ALL_SAMPLES_DATA.map((item) => ({
      params: { sampleID: item.sampleID.toString() },
    }));

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.error("Error fetching index browse data:", error);
    return {
      paths: [],
      fallback: false,
    };
  }
}

export async function getStaticProps(context) {
  const { params } = context;

  // Getting the link for the JSON
  try {
    const ALL_SAMPLES = await fetch(
      "https://raw.githubusercontent.com/mxrked/ctfarchives_cdn/main/files/json/SAMPLES.json"
    );

    if (!ALL_SAMPLES.ok) {
      throw new Error("Failed to fetch data from the JSON endpoint");
    }

    // Parsing the data
    const ALL_SAMPLES_DATA = await ALL_SAMPLES.json();

    // Finding the specific item using sampleID
    const SAMPLE = ALL_SAMPLES_DATA.find(
      (item) => item.sampleID === params.sampleID
    );

    // If no sample, throw error
    if (!SAMPLE) {
      throw new Error(`Sample with ID "${params.sampleID}" not found`);
    }

    // Returning the props
    return {
      props: {
        SAMPLE,
      },
    };
  } catch (error) {
    console.error("Error fetching index browse data:", error);
    return {
      props: {
        SAMPLE: null,
      },
    };
  }
}

export default function SamplePage({ SAMPLE }) {
  const router = useRouter();

  return (
    <div id="PAGE" className="page overrides_Sample full-second">
      <main id="PAGE_CNT">
        <Navigation />

        <SampleEmbed
          sample_name={SAMPLE.sampleName}
          iframeSrc={SAMPLE.sampleSrc}
        />
        <SampleDetails
          s_id={SAMPLE.sampleID}
          s_name={SAMPLE.sampleName}
          s_desc={SAMPLE.sampleDesc}
          s_price={SAMPLE.samplePrice}
          s_monthly={SAMPLE.sampleMonthly}
          s_annually={SAMPLE.sampleAnnually}
        />
      </main>
    </div>
  );
}
