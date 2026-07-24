function CourseFilter({

courses,

selectedCourse,

setSelectedCourse,

}){

return(

<select

value={selectedCourse}

onChange={(e)=>

setSelectedCourse(e.target.value)

}

>

{

courses.map((course)=>(

<option

key={course}

value={course}

>

{course}

</option>

))

}

</select>

);

}

export default CourseFilter;