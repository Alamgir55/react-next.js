import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import User from '../components/User';

class indexPage extends Component {
    static async getInitialProps(context){
        console.log(context);
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ appName: "Super App" });
            }, 1000);
        });
        return promise;
    }

    render(){
        return (
            <div>
                <h1>The main Page of {this.props.appName}</h1>
                <p>Go to{" "} <Link href="/auth">Auth</Link></p>
                <button onClick={() => Router.push('/auth')}>Go to auth</button>
                <User name="Rax" age="25"/>
            </div>
        );
    }
};

export default indexPage;