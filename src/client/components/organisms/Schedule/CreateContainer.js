import React, { Fragment } from 'react'
import TripsContainer  from './TripsContainer'
import ScheduleContainer  from './ScheduleContainer'
import base from '../../../assets/api/api'
import firebase from 'firebase'

export default class CreateContainer extends React.Component {
    state = {
      month: '',
      tripCode: '',
      dates: '',
      boat: '',
      avalibility: '',
        items: {},
        data: {}
    }


    addItem = () => {
        const {
            month,
            tripCode,
            dates,
            boat,
            avalibility
        } = this.state
        this.setState({
          items: this.state.items.concat([month, tripCode, dates,boat, avalibility]) 
        });
      }

    componentWillMount() {
        
        const {
            month,
            tripCode,
            dates,
            boat,
            avalibility,
            items
        } = this.state
        const postData = {
            month,
            tripCode,
            dates,
            boat,
            avalibility
        }

        const postKey = firebase.database().ref().child('Container').key
        items['/schedule/' + postKey] = postData

        const newLocal = '/schedule/April';
        this.refs = base.fetch(newLocal, {
            context: this,
            asArray: true,
            then(data){
              this.setState({
                data
              })
            }
          });

        if (!this.refs) {
            return null
        }
        return firebase.database().ref().update(items);
    }
    componentWillUnmount() {
        base.removeBinding(this.refs)
    }

    _renderContainer = () => {
        const { data } = this.state;
        if (!data) return null
        for (let key in data) {
            return (
                <Fragment>
              <ScheduleContainer month={data[3]} >
               <TripsContainer
               tripCode={data[4]}
               dates={data[2]}
               boat={data[1]}
               avalibility={data[0]}
               />
             </ScheduleContainer>
             </Fragment>
            )
        }
    }




      render() {
            return (
                <Fragment>
                    {this._renderContainer()}
             </Fragment>
            )
        }

  }