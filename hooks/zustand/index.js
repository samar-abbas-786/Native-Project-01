import createStore, { create } from 'zustand'
import {devtools,persist} from 'zustand/middleware'

const courseStore=(set)=>({
    courses:[],
    addCourses:(course)=>{
        set((state)=>({
           courses:[course,...state.courses]
        }))
    },
    removeCourses:(courseId)=>{
        set((state)=>({
         courses:state.courses.filter((c)=>c.id!==courseId)
        }))
    }

})
const  useCourseStore=create(
    devtools(
        persist(courseStore,{
            name:'Courses'
        })
    )
)
export default useCourseStore;


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