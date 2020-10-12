### Flame Graph

![Flame Graph](https://i.imgur.com/sLBqpKH.png)

```
ab -k -c 350 -n 20000 "http://localhost:8080/stock/get-news?region=US&category=TSLA"
```

```
Document Path:          /stock/get-news?region=US&category=TSLA
Document Length:        135 bytes

Concurrency Level:      350
Time taken for tests:   12.761 seconds
Complete requests:      20000
Failed requests:        376
   (Connect: 0, Receive: 0, Length: 376, Exceptions: 0)
Keep-Alive requests:    20000
Total transferred:      167972219 bytes
HTML transferred:       163709963 bytes
Requests per second:    1567.27 [#/sec] (mean)
Time per request:       223.319 [ms] (mean)
Time per request:       0.638 [ms] (mean, across all concurrent requests)
Transfer rate:          12854.37 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   2.0      0      25
Processing:     3  204 781.1     82   12736
Waiting:        3  204 780.3     82   12735
Total:          3  205 782.8     82   12760

Percentage of the requests served within a certain time (ms)
  50%     82
  66%     87
  75%     92
  80%     99
  90%    115
  95%    147
  98%   1863
  99%   5504
 100%  12760 (longest request)
```

```
ab -k -c 350 -n 20000 "localhost:8080/stock/get-analysis?region=US&symbol=AMRN"
```

```
Document Path:          /stock/get-analysis?region=US&symbol=AMRN
Document Length:        135 bytes

Concurrency Level:      350
Time taken for tests:   22.668 seconds
Complete requests:      20000
Failed requests:        13954
   (Connect: 0, Receive: 0, Length: 13954, Exceptions: 0)
Keep-Alive requests:    20000
Total transferred:      260992398 bytes
HTML transferred:       256676582 bytes
Requests per second:    882.29 [#/sec] (mean)
Time per request:       396.697 [ms] (mean)
Time per request:       1.133 [ms] (mean, across all concurrent requests)
Transfer rate:          11243.65 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   1.9      0      26
Processing:     4  393 701.0    376   12062
Waiting:        4  393 701.0    376   12062
Total:          4  393 702.5    376   12087

Percentage of the requests served within a certain time (ms)
  50%    376
  66%    381
  75%    384
  80%    386
  90%    392
  95%    399
  98%    408
  99%   5464
 100%  12087 (longest request)
```

