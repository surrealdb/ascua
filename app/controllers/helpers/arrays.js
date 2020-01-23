import Controller from '@ember/controller';

export default class extends Controller {

	func() { }

	array = [ [1], [2], [3] ];

	adult1 = { name: "Adult 1", type: "Adult", isAdult: true, isChild: false, age: "30" };
	adult2 = { name: "Adult 2", type: "Adult", isAdult: true, isChild: false, age: "40" };
	adult3 = { name: "Adult 3", type: "Adult", isAdult: true, isChild: false, age: "60" };
	adult4 = { name: "Adult 4", type: "Adult", isAdult: true, isChild: false, age: "70" };

	child1 = { name: "Child 1", type: "Child", isAdult: false, isChild: true, age: "4" };
	child2 = { name: "Child 2", type: "Child", isAdult: false, isChild: true, age: "2" };

	people = [this.adult1, this.adult2, this.adult3, this.adult4, this.child1, this.child2];

	adults = [this.adult1, this.adult2, this.adult3, this.adult4];

	childs = [this.child1, this.child2];

}
