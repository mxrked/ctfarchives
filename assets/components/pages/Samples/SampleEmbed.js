/**
 *
 *  This is used to embed a sample website into the website
 *
 */

import styles from "../../../styles/modules/Samples/Samples.module.css";

export const SampleEmbed = (props) => {
  return (
    <div className={`${styles.sample_embed}`}>
      {/** <span>
        Here is a live demo of the <span>{props.sample_name}</span> website. 🙂
      </span> */}

      <iframe
        src={props.iframeSrc}
        className={`${styles.sample_embed_iframe}`}
      />
    </div>
  );
};
