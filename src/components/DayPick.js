import React from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import {connect} from 'react-redux'
import {saveDaysRange, resetDaysRange} from '../actions'

class DayPick extends React.Component {
    static defaultProps = {
        numberOfMonths: 2,
    };
    constructor(props) {
        super(props);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.handleResetClick = this.handleResetClick.bind(this);
        // this.state = this.getInitialState();
    }
    // getInitialState() {
    //     return {
    //         from: undefined,
    //         to: undefined,
    //     };
    // }
    handleDayClick(day) {
        const range = DateUtils.addDayToRange(day, this.props.filter);
        this.props.saveDaysRange(range);
    }
    handleResetClick() {
        this.props.resetDaysRange()
    }

    render() {
        const { from, to } = this.props.filter;
        const modifiers = { start: from, end: to };

        return (
            <div className="RangeExample">
                <p>
                    {!from && !to && 'Please select the first day.'}
                    {from && !to && 'Please select the last day.'}
                    {from &&
                    to &&
                    `Selected from ${from.toLocaleDateString()} to
                ${to.toLocaleDateString()}`}{' '}
                    {from &&
                    to && (
                        <button className="link" onClick={this.handleResetClick}>
                            Reset
                        </button>
                    )}
                </p>
                <DayPicker
                    className="Selectable"
                    numberOfMonths={this.props.numberOfMonths}
                    selectedDays={[from, { from, to }]}
                    modifiers={modifiers}
                    onDayClick={this.handleDayClick}
                />


            </div>
        );
    }
}
function mapSTP(state) {
    return {
        filter: state.filter
    }
}

export default connect(mapSTP, {saveDaysRange, resetDaysRange})(DayPick)