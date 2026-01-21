import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import NavBar from '../components/NavBar';
import LeftAside from '../components/HomeLayout/LeftAside';
import RightAside from '../components/HomeLayout/RightAside';
import Loading from '../components/Loading';

const HomeLayout = () => {
    const {state} = useNavigation();
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto'>
                    <LatestNews></LatestNews>
                </section>
                <nav className='w-11/12 mx-auto mt-5 mb-10'>
                    <NavBar></NavBar>
                </nav>
            </header>
            <main className='w-11/12 mx-auto  grid grid-cols-12 gap-5 mb-10'>
                <aside className='col-span-3 lg:col-span-3 sticky top-0 h-fit '>
                    <LeftAside></LeftAside>
                </aside>
                <section className="main_content col-span-6 lg:col-span-6">
                  {state == 'loading' ? <Loading></Loading> : <Outlet></Outlet> }  
                </section>
                <aside className='col-span-3 lg:col-span-3 sticky top-0 h-fit'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;