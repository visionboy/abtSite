package com.android.jh.remoteokhttp;

import android.os.AsyncTask;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;

import java.io.IOException;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

public class MainActivity extends AppCompatActivity {


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // 네트워크에 접속하기 위해선 서브 스레드를 생성하여 접근
        new AsyncTask<Void, Void, Void>(){
            @Override
            protected Void doInBackground(Void... voids) {
                try {
                    String result = getData("http://172.20.80.100:8003/testOkhttp");
                    Log.i("RESULT", "result============" + result);

                } catch (IOException e) {
                    e.printStackTrace();
                }
                return null;
            }
        }.execute();

        // new Thread
        new Thread() {
            @Override
            public void run() {
                try {
                    String result = getData("http://172.20.80.100:8003/testOkhttp");
                    Log.i("RESULT", "result============" + result);

                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }.start();
    }

    private String getData(String url) throws IOException {
        // okHTTP 인스턴스 생성
        OkHttpClient client = new OkHttpClient();
        // request 생성
        Request request = new Request.Builder()
                .url(url)
                .build();
        // client 인스턴스에 request 를 담아 보낸다
        Response response = client.newCall(request).execute(); // -> 서버측으로 요청
        return response.body().string();
    }
}
