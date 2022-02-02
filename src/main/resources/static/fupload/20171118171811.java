package me.visionboy.albert;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.support.v7.widget.Toolbar;
import android.webkit.WebView;
import android.app.Activity;
import android.net.Uri;
import android.view.ContextMenu;
import me.visionboy.albert.Common.BaseActivity;
import android.view.MenuItem;
import android.view.View;
import android.webkit.URLUtil;
import android.app.DownloadManager;
import android.widget.Toast;
import android.content.Context;
import android.webkit.WebViewClient;
import android.os.Environment;
import java.io.File;

public class MainActivity extends BaseActivity {

    protected WebView m_WebView;
    private Context mContext;
    private Activity mActivity;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        checkPermission();

        mContext = getApplicationContext();
        mActivity = MainActivity.this;

        m_WebView = (WebView)findViewById(R.id.main_webView);

        m_WebView.getSettings().setJavaScriptEnabled(true);

        // Set web view clicent for web view
        m_WebView.setWebViewClient(new WebViewClient());

        registerForContextMenu(m_WebView);

        m_WebView.loadUrl("http://www.naver.com");

        InitWebView(m_WebView);

    }

    // To save image from web view
    @Override
    public void onCreateContextMenu(ContextMenu menu,View v,ContextMenu.ContextMenuInfo menuInfo){
        super.onCreateContextMenu(menu, v, menuInfo);

        // Get the web view hit test result
        final WebView.HitTestResult result = m_WebView.getHitTestResult();



        // If user long press on an image
        if (result.getType() == WebView.HitTestResult.IMAGE_TYPE ||
                result.getType() == WebView.HitTestResult.SRC_IMAGE_ANCHOR_TYPE) {

            // Set the title for context menu
            menu.setHeaderTitle("MENU");

            // Add an item to the menu
            menu.add(0, 1, 0, "Image Download")
                    .setOnMenuItemClickListener(new MenuItem.OnMenuItemClickListener() {
                        @Override
                        public boolean onMenuItemClick(MenuItem menuItem) {
                            // Get the image url
                            String imgUrl = result.getExtra();

                            // If this is an image url then download it
                            if(URLUtil.isValidUrl(imgUrl)){
                                File direct =
                                        new File(Environment
                                                .getExternalStoragePublicDirectory(Environment.DIRECTORY_PICTURES)
                                                .getAbsolutePath() + "/Download/");


                                if (!direct.exists()) {
                                    direct.mkdir();
                                    //Log.d(LOG_TAG, "dir created for first time");
                                }

                                // Initialize a new download request
                                DownloadManager dm = (DownloadManager) mContext.getSystemService(Context.DOWNLOAD_SERVICE);
                                DownloadManager.Request request = new DownloadManager.Request(Uri.parse(imgUrl));
                                request.allowScanningByMediaScanner();
                                request.setNotificationVisibility(DownloadManager.Request.VISIBILITY_VISIBLE_NOTIFY_COMPLETED);
                                DownloadManager downloadManager = (DownloadManager) getSystemService(DOWNLOAD_SERVICE);

                                request.setAllowedNetworkTypes(DownloadManager.Request.NETWORK_WIFI | DownloadManager.Request.NETWORK_MOBILE)
                                        .setAllowedOverRoaming(false)
                                        .setTitle("test.jpg")
                                        .setMimeType("image/jpeg")
                                        .setNotificationVisibility(DownloadManager.Request.VISIBILITY_VISIBLE_NOTIFY_COMPLETED)
                                        .setDestinationInExternalPublicDir(Environment.DIRECTORY_PICTURES,
                                                File.separator + "Download" + File.separator + "test.jpg");
                                downloadManager.enqueue(request);

                                Toast.makeText(mContext,imgUrl,Toast.LENGTH_SHORT).show();
                                Toast.makeText(mContext,"image saved.",Toast.LENGTH_SHORT).show();
                            }else {
                                Toast.makeText(mContext,"Invalid image url.",Toast.LENGTH_SHORT).show();
                            }
                            return false;
                        }
                    });
        }
    }
}
