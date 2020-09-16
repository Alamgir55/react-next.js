import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import User from '../components/User';

const errorPage = () => (
    <div>
        <h1>Oops, something went wrong.</h1>
        <p>Go to <Link href="/">Go back</Link></p>
    </div>
);

export default errorPage;