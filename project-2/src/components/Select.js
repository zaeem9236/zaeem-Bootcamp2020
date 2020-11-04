import React, { useState } from 'react';
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

export default function Selects(props) {
    const classes = useStyles();
    const [selectedValue, updateSelectedValue] = useState(-1);
    let Countries = [];

    if (props.globalCovidData.Countries !== undefined) {
        Countries = props.globalCovidData.Countries;
        console.log(props.globalCovidData,'in selected ')
    }


    const handleChange = (event) => {
        const value = event.target.value;
        updateSelectedValue(value);
        
    };



    return (
        <div className='select'>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-native-helper">Country</InputLabel>
                <NativeSelect
                    onChange={handleChange}

                >
                    <option aria-label="Global" value={-1} >Global</option>
                    {Countries.map(function (val, index) {
                        //   console.log(index +' : '+val.Country)
                        return (<option value={index} key={index}>{val.Country}</option>);

                    })}



                </NativeSelect>
                <FormHelperText>Select Country</FormHelperText>
            </FormControl>
            {/* {console.log(selectedValue)} */}
        </div>
    );
}