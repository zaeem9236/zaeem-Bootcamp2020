import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(10),
        minWidth: 280,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function Selects(props) {
    const classes = useStyles();
    // console.log(props,'check')
    let Countries = [];
    if (props.globalCovidData.Countries !== undefined) { //check: data is valid 
        Countries = props.globalCovidData.Countries;
        // console.log(props.globalCovidData,'in selected ')
        // countryName = props.globalCovidData.Countries[props.country];
        //  console.log(props.globalCovidData.Countries[0],'sfsdf');
         if (props.country === '-1'){
             var countryName = 'Global'; 
         }else{
              countryName = props.globalCovidData.Countries[props.country].Country;
         }
    }


    const handleChange = (event) => {
        const value = event.target.value;
        props.updateCountry(value);        
    };



    return (
        <div className='select'>
            <FormControl className={classes.formControl}  >
                <InputLabel htmlFor="age-native-helper">Country</InputLabel>
                <NativeSelect 
                    onChange={handleChange}
                    

                >
                    <option  aria-label="Global" value={'-1'}  >Global</option>
                    {Countries.map(function (val, index) {
                        //   console.log(index +' : '+val.Country)
                        return (<option  value={index} key={index}>{val.Country}</option>);

                    })}



                </NativeSelect>
                <FormHelperText >Select Country</FormHelperText>
            </FormControl>
            {/* {console.log(selectedValue)} */}

            <div>
                <p className='country_name'>{countryName}</p>
                
            </div>
        </div>
    );
}