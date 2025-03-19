package com.example.javatest;

import android.os.Bundle;
import android.widget.TextView;
import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        TextView helloWorldTextView = findViewById(R.id.hello_world_text);
        helloWorldTextView.setText("Hello World");

        TextView logoTextView = findViewById(R.id.logo_text);
        logoTextView.setText("Afanwi Brian");
    }
}