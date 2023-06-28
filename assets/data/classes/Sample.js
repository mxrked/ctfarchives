/**
 *
 *  This is the Sample class
 *
 */

export default class Sample {
  constructor(
    sampleID,
    sampleSrc,
    sampleName,
    sampleDesc,
    samplePrice,
    sampleImg
  ) {
    this._sampleID = sampleID;
    this._sampleSrc = sampleSrc;
    this._sampleName = sampleName;
    this._sampleDesc = sampleDesc;
    this._samplePrice = samplePrice;
    this._sampleImg = sampleImg;
  }
}
