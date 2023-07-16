type FetchInterceptor = {
    request?: (config: RequestConfig) => RequestConfig | Promise<RequestConfig>;
    requestError?: (error: any) => any;
    response?: <T>(response: Response, config: RequestConfig) => T | Promise<T>;
    responseError?: (error: any) => any;
};

type RequestConfig = Omit<RequestInit, 'body'> & {
    body?: Record<string, any> | string;
    headers?: Record<string, string>;
    url?: RequestInfo | URL;
};

class FetchClient {
    private interceptors: FetchInterceptor[];

    constructor() {
        this.interceptors = [];
    }

    public use(interceptor: FetchInterceptor) {
        this.interceptors.push(interceptor);
    }

    public async get<T>(url: string, config: RequestConfig = {}): Promise<T> {
        return this.request<T>({
            ...config,
            url,
            method: 'GET',
        });
    }

    public async post<T>(url: string, data?: Record<string, any>, config: RequestConfig = {}): Promise<T> {
        return this.request<T>({
            ...config,
            url,
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                ...(config.headers || {}),
            },
        });
    }

    public async put<T>(url: string, data?: Record<string, any>, config: RequestConfig = {}): Promise<T> {
        return this.request<T>({
            ...config,
            url,
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                ...config.headers,
            },
        });
    }

    public async delete<T>(url: string, config: RequestConfig = {}): Promise<T> {
        return this.request<T>({
            ...config,
            url,
            method: 'DELETE',
        });
    }

    private async request<T>(config: RequestConfig): Promise<T> {
        let finalConfig = config;
        for (const interceptor of this.interceptors) {
            if (interceptor.request) {
                finalConfig = await interceptor.request(finalConfig);
            }
        }

        try {
            const response = await fetch(finalConfig.url, finalConfig);
            if (!response.ok) {
                throw new Error(`Request failed with status ${response.status}`);
            }

            let data;
            for (const interceptor of this.interceptors) {
                if (interceptor.response) {
                    data = await interceptor.response<T>(response, finalConfig);
                }
            }

            return data;
        } catch (error) {
            for (const interceptor of this.interceptors) {
                if (interceptor.responseError) {
                    throw interceptor.responseError(error);
                }
            }

            throw error;
        }
    }
}
//创建 FetchClient 实例
const fetchClient = new FetchClient();

//添加请求拦截器
fetchClient.use({
    request: (config) => {
        console.log('请求拦截器');
        return config;
    },
    requestError: (error) => {
        console.error('请求拦截器错误：', error);
        return error;
    },
});

//添加响应拦截器
fetchClient.use({
    response: async (response, config) => {
        console.log('响应拦截器');
        const data = await response.json();
        return data;
    },
    responseError: (error) => {
        console.error('响应拦截器错误：', error);
        return error;
    },
});

//发起 GET 请求
fetchClient.get('/api/data')
    .then((data) => {
        console.log('GET 响应数据：', data);
    })
    .catch((error) => {
        console.error('请求失败：', error);
    });

//发起 POST 请求
const postData = { name: 'John', age: 30 };
fetchClient.post('/api/data', postData)
    .then((data) => {
        console.log('POST 响应数据：', data);
    })
    .catch((error) => {
        console.error('请求失败：', error);
    });
//deepreadonly
type DeepReadonly<T> = {
    readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};
type X = {
    x: {
        a: 1;
        b: 'hi';
    };
    y: 'hey';
};

type Expected = {
    readonly x: {
        readonly a: 1;
        readonly b: 'hi';
    };
    readonly y: 'hey';
};

type Todo = DeepReadonly<X>;

// 这里的 Todo 类型会与 Expected 类型相匹配
const todo: Todo = {
    x: {
        a: 1,
        b: 'hi',
    },
    y: 'hey',
};
