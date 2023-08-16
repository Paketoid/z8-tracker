Z8.define('org.zenframework.z8.template.controls.AllTasks', {
	extend: 'Z8.application.form.Navigator',
	
	getListboxConfig: function() {
		var names = this.getNames();
		var quickFilters = this.getQuickFilterFields();
		var label = this.getListboxLabel(names);
		var store = this.store;

		return {
			cls: 'navigator-listbox' + (this.isFormPresentation() ? '' : ' display-none'),
			store: store,
			query: { request: store.getModelName(), text: store.form.text },
			fields: names,
			names: names,
			label: label,
			actions: {request: org.zenframework.z8.template.model.Task.finishTask(), text:"Завершить"},
			quickFilters: quickFilters,
			filters: quickFilters.length == 0,
			editable: true,
			locks: !this.isReadOnly() && Application.listbox.locks,
			checks: Application.listbox.checks,
			totals: store.hasTotals()
		};
	},
});