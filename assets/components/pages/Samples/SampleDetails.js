/**
 *
 *  This is the Sample Details
 *
 */

import styles from "../../../styles/modules/Samples/Samples.module.css";

export const SampleDetails = (props) => {
  return (
    <div className={`${styles.sample_details}`}>
      <div className={`${styles.sample_details_inner}`}>
        <span className={`${styles.sample_id}`}>{props.s_id}</span>
        <h1>{props.s_name}</h1>
        <p className={`${styles.sample_desc}`}>{props.s_desc}</p>
        <p className={`${styles.sample_site_price}`}>
          <strong>Site Price:</strong> <span>${props.s_price}</span>
        </p>
        <p className={`${styles.sample_hosting_price}`}>
          <strong>Hosting Cost:</strong> <span>${props.s_monthly}mth/</span>
          <span>${props.s_annually}yr</span>
        </p>
      </div>
    </div>
  );
};
