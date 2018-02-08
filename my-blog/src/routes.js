import ShowBlogs from "./components/ShowBlogs.vue"
import AddBlog from "./components/AddBlog.vue"
import SinglBlog from "./components/SinglBlog.vue"

export default[
    {path:"/",component:ShowBlogs},
    {path:"/add",component:AddBlog},
    {path:"/blog/:id",component:SinglBlog},
]