### Performance
1. Please checkout the [report](https://github.com/rava-dosa/nodeapp1/tree/main/reports)
2. Generated using ab and 0x

### Flow of the code

1. Client Requests data
2. If data is not found in cache, then a request is sent, data saved in cache, and response is returned to client
3. If data is present in cache, we fetch that data and return.
4. Cache is refreshed after 500 seconds

### Postman Collection
1. https://www.postman.com/collections/86d509e85669d64df5c2


### Commands

```
1. npm run serve :- to run server
2. npm run flamegraph :- to generate flamegraph
3. npm run doc :- to generate docs
```

### Docker Setup

```
1. docker build -t $USERNAME/nodeapp1 .
2. docker run -p 8081:8080 -d $USERNAME/nodeapp1
```