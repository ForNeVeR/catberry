{
    "targets": [
        {
            "target_name": "HTMLTokenizer",
            "sources": [ "src/HTMLTokenizer/HTMLTokenizer.cc" ],
            "cflags_cc": [ "-O3", "-std=c++11" ],
            "include_dirs" : [
                "<!(node -e \"require('nan')\")"
            ]
        }
    ]

}
