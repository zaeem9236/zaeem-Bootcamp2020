import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(10),
        minWidth: 320,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function Selects() {
    const classes = useStyles();
    const [selectedValue, updateSelectedValue] =useState('0');

    const handleChange = (event) => {
        const value = event.target.value;
        updateSelectedValue(value);
    };

    fetch('https://api.covid19api.com/countries')
    .then(response => response.json())
    .then(json => console.log(json[1],"now"))
    
    return (
        <div className='select'>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-native-helper">Country</InputLabel>
                <NativeSelect
                    onChange={handleChange}
                    
                >
                    <option aria-label="Global" >Global</option>
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                </NativeSelect>
                <FormHelperText>Select Country</FormHelperText>
            </FormControl>
            {console.log(selectedValue)}
        </div>
    );
}