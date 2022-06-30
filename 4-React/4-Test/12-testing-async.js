/* 
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
===================================================================================================================================
 
در داخل اون بنویسیم دقیقا مثل پایینی async ما اگر بخایم بیایم و یک کامپوننت داشته باشیم که یک عملیات 

// reducer

const initialState = {   error: true   ,     post: {   title: 'title', post: 'Post'    }  ,   loading: false  }

const postReducer = (state, action) => {
    switch (action.type) {
        case 'SUCCESS':
            return {   error: null,   post: action.payload,     loading: false     }
        case 'ERROR':
            return {   error: action.paylod , post: null ,  loading: false      }
        case 'LOADING':
            return {   error: null,   post: null,     loading: true        }
        default:
            return state     }
}

// functional components


export  default  function Post({ url }) {

    const [{ error, post, loading }, dispatch] = useReducer(postReducer, initialState)

    function fetchPost(url) {
        axios.get(url)
            .then(response => {
                const { data } = response
                dispatch({    type: 'SUCCESS',     payload: data     })   })
            .catch(error => {
                dispatch({  type: 'ERROR',   payload: 'error'   })   })
    }
    
    function handleLoading() {
        fetchPost(url)
        dispatch({  type: 'LOADING'   })
    }

    const buttonText = loading ? 'loading' : 'load';
    
    return (
        <div>
            <button onClick={handleLoading}>{buttonText}</button>
            {post && (
                <>
                    <h1>{post.title}</h1>
                    <article>{post.body}</article>
                </>
            )}
            {error && <p role="alert">Erro in loading post!</p>}
        </div>
    )
}

===================================================================================================================================

const server = setupServer(
    rest.get('/post/:id', (req, res, ctx) => {
        return res(ctx.json({
            title: 'sample post title',
            body: 'smaple body'
        }))
    })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

fireEvent و UserEvent  ما برای شبیه سازی عملیات کلیک کردن دو تا راه حل داریم یکی استفاده

it('load and display post', async () => {
    render(<Post url="/post/1" />)

    fireEvent.click(screen.getByRole('button', {
        name: /load/i
    }))

       //  await waitFor(() => {
       //  screen.getByRole('heading')
       // })

       //  await screen.findByRole('heading')

    await waitForElementToBeRemoved(() => screen.queryByRole('button', {
        name: /loading/i
    }))

    expect(screen.getByRole('heading')).toHaveTextContent('sample post title')
    expect(screen.getByRole('article')).toHaveTextContent('smaple body')
    expect(screen.getByRole('button', {
        name: /load/i
    })).toBeInTheDocument()
})

===================================================================================================================================

it('alert error', async () => {
    render(<Post />)

    fireEvent.click(screen.getByRole('button', {
        name: /load/i
    }))

    await screen.findByRole('alert')

    expect(screen.getByRole('alert')).toHaveTextContent('Error in loading post!')
})

===================================================================================================================================

it('alert by server response', async () => {
    // server.use(
    //     rest.get('/post/:id', (req, res, ctx) => {
    //         return res(
    //             ctx.status(404),
    //             ctx.json({
    //                 error: 'not found'
    //             }))
    //     })
    // )

    render(<Post url="/post/0" />)

    fireEvent.click(screen.getByRole('button', {
        name: /load/i
    }))

    await screen.findByRole('alert')

    expect(screen.getByRole('alert')).toHaveTextContent('not found')
})

===================================================================================================================================
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
