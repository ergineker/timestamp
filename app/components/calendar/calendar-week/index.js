/* global document, customElements, BaseElement, CalendarDay */

class CalendarWeek extends BaseElement {
    constructor() {
        super().fetchTemplate();
    }

    /**
     * Adds a day to this week.
     *
     * @param {Object} day Day creation object.
     * @return {CalendarWeek}
     */
    addDay(day) {
        // A week is only going to have seven days
        if (this.children.length < 7) {
            this.appendChild(CalendarDay.create(day));
        }

        return this;
    }

    /**
     * Adds multiple days to this week.
     *
     * @param {Array} days An array of day creation objects.
     * @return {CalendarWeek}
     */
    addDays(days) {
        days.forEach(day => this.addDay(day));

        return this;
    }
}

// Remember document from import scope. Needed for accessing elements inside
// the imported html…
CalendarWeek.ownerDocument = document.currentScript.ownerDocument;

// @see https://developer.mozilla.org/docs/Web/API/CustomElementRegistry/define
customElements.define('calendar-week', CalendarWeek);
