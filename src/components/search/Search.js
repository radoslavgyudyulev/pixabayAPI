import React, { Component } from 'react'
import ImageResults from '../image-results/ImageResults'
import axios from 'axios'

import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem';

export default class Search extends Component {
    state = {
       searchText: '',
       amount: 15,
       apiUrl: 'https://pixabay.com/api',
       apiKey: '8769840-8b87fa91412f441ea08d0b9ab',
       images: []
    }

    onTextChange = (e) => {
        this.setState({[e.target.name]: e.target.value}, () => {
            axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`)
            .then(json => this.setState({images: json.data.hits}))
            .catch(err => console.log(err))
            
        })
    }

    onAmountChange = (e, index, value) => this.setState({amount: value})

    


    render() {
        console.log(this.state.amount)
        return (
            <div>
                <TextField 
                   name="searchText"
                   value={this.state.searchText}
                   onChange={this.onTextChange}
                   floatingLabelText="Search ..."
                />
                <br/>
                <SelectField
                name="amount"
                floatingLabelText="Amount"
                value={this.state.amount}
                onChange={this.onAmountChange}>
                <MenuItem value={5} primaryText="5" />
                <MenuItem value={10} primaryText="10" />
                <MenuItem value={15} primaryText="15" />
                <MenuItem value={30} primaryText="30" />
                <MenuItem value={50} primaryText="50" />
                </SelectField>
                <br />
                {this.state.images.length > 0 ? (<ImageResults images={this.state.images} />) : null}
            </div>
        )
    }
}
