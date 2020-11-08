export class PaeDiagnosisSummary {
    constructor(
        public document: string,
        public documentVO: string,
        public aplPdfTypeCd: string,
        public aplRequestId: string,
        public appPdfSw: string,
        public destinationCd: string,
        public documentType: string,
        public genDocumentId: string,
        public paeId: string,
        public pageId: string,
        public personId: string,
        public refId: string
    ) { }
}