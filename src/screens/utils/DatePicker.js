import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';


export default class DateTimePickerTester extends Component {
    state = {
        isDateTimePickerVisible: false,
    };

    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = (date) => {
        console.log('A date has been picked: ', date);
        this.props.datePick(date.toDateString());
        this._hideDateTimePicker();
    };

    render () {
        return (
            <View>
                <TouchableOpacity onPress={this._showDateTimePicker}>
                    {this.props.children}
                </TouchableOpacity>
                <DateTimePicker
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this._handleDatePicked}
                    onCancel={this._hideDateTimePicker}
                    maximumDate	= {new Date(Date.now() - 31556952000)} 
                />
            </View>
        );
    }

}
