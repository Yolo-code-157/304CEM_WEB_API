import axios from 'axios'
import React , {useState, useContext} from 'react'
import {GlobalState} from "../../../GlobalState"
import "./Category.css"

function Categories() {
const state = useContext(GlobalState)
const [categories, setCategories] = state.categoriesAPI.categories
const [category, setCategory] = useState('')


    return (
        <div className="categories">
            <form>
                <label htmlFor="category">Category</label>
                <input type="text" name="category" value={category} required 
                onChange={e => setCategory(e.target)}/>

                <button type="submit"> SAVE </button>
            </form>
            <div className="col">
                {
                    categories.map(category => (
                        <div className="row" key={category._id}>
                            <p>{category.name}</p>
                            <div>
                                <button>EDIT</button>
                                <button>DELETE</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        
    )
}

export default Categories
