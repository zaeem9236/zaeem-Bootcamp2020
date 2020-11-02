import React from 'react';
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
    const [state, setState] = React.useState({
        age: '',
        name: 'hai',
    });

    const handleChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
    };

    return (
        <div className='select'>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-native-helper">Country</InputLabel>
                <NativeSelect
                    value={state.age}
                    onChange={handleChange}
                    inputProps={{
                        name: 'age',
                        id: 'age-native-helper',
                    }}
                >
                    <option aria-label="Global" value="sdf" >Global</option>
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                </NativeSelect>
                <FormHelperText>Select Country</FormHelperText>
            </FormControl>
        </div>
    );
}