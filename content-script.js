(() => {
    let count = 0;

    const execute = () => {
        if (sap?.ui && typeof sap?.ui?.getCore === "function") {
			const ids = ["application-TimeEntry-manageTimeEntry-component---timesheetMain--alertBtn"];

			ids.forEach((id) => {
                let control = sap.ui.getCore().byId("application-TimeEntry-manageTimeEntry-component---timesheetMain--alertBtn");

				if (control && control.getEnabled()) {
                    control.setEnabled(false);
				}
			});
        } else {
            if (count < 10) {
                setTimeout(() => { afterDOMLoaded() }, 2500);
                count++;
            }
        }
    }
	
    execute();
})();