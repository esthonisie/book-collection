import Create from './pages/Create.vue';
import Edit from './pages/Edit.vue';

export const reviewRoutes =  [
	// TODO: gebruik evt. een formatter voor consistente opmaak (inspringen)
	{ 
		path: '/books/:id/reviews/create', 
    component: Create,
    name: 'reviews.create',
	},
	{
    path: '/reviews/:id/edit', 
		component: Edit,
    name: 'reviews.edit'
	}			
];