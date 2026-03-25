export interface Book {
	id: number;
	author_id: number;
	title: string;
	summary: string;
	author?: string;
}

// TODO: persoonlijk zou ik er voor kiezen de author property buiten het book te houden, en alleen de author_id er in te laten, omdat dit ook zo
// in de back-end is gestructureerd. Je kunt dan via de author-store de volledige naam via het book.author_id opvragen. Voorwaarde is dan wel dat je
// ook alle auteurs in moet laden als je het boeken overzichtscherm laadt.