import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { chooseName, choosePrice, choosePower, chooseMovie } from '../../redux/slices/rootSlice';
import { Input } from '../sharedComponents/Input';
import { server_calls } from '../../api';
import { useGetData } from '../../custom-hooks';

interface MarvelFormProps {
    id?:string;
    data?:{}
}

interface MarvelState {
    name: string;
    price: string;
    power: number;
    movie: string;
}

export const MarvelForm = (props:MarvelFormProps) => {

    const dispatch = useDispatch();
    let { marvelData, getData } = useGetData();
    const store = useStore()
    const name = useSelector<MarvelState>(state => state.name)
    const price = useSelector<MarvelState>(state => state.price)
    const power = useSelector<MarvelState>(state => state.power)
    const movie = useSelector<MarvelState>(state => state.movie)
    const { register, handleSubmit } = useForm({ })

    const onSubmit = (data:any, event:any) => {
        console.log(props.id)

        if( props.id!){
            server_calls.update(props.id!, data)
            console.log(`Updated:${data} ${props.id}`)
            window.location.reload()
            event.target.reset();
        } else {
            dispatch(chooseName(data.name))
            dispatch(choosePrice(data.price))
            dispatch(choosePower(data.power))
            dispatch(chooseMovie(data.movie))
            
            server_calls.create(store.getState())
            window.location.reload()
        }
    }

    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Name</label>
                    <Input {...register('name')} name="name" placeholder='Name' />
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <Input {...register('price')} name="price" placeholder="price"/>
                </div>
                <div>
                    <label htmlFor="power">power</label>
                    <Input {...register('power')} name="power" placeholder="power"/>
                </div>
                <div>
                    <label htmlFor="movie">movie</label>
                    <Input {...register('movie')} name="movie" placeholder="movie"/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}