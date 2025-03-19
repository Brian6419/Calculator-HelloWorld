package com.example.anagram;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

public class MainActivity extends AppCompatActivity {

    private EditText number1EditText;
    private EditText number2EditText;
    private TextView resultTextView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_main);

        number1EditText = findViewById(R.id.number1);
        number2EditText = findViewById(R.id.number2);
        resultTextView = findViewById(R.id.result);
        Button calculateButton = findViewById(R.id.calculate_button);

        calculateButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                calculateSum();
            }
        });

        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main), (v, insets) -> {
            Insets systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars());
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom);
            return insets;
        });
    }

    private void calculateSum() {
        String number1Str = number1EditText.getText().toString();
        String number2Str = number2EditText.getText().toString();

        if (!number1Str.isEmpty() && !number2Str.isEmpty()) {
            int number1 = Integer.parseInt(number1Str);
            int number2 = Integer.parseInt(number2Str);
            int sum = number1 + number2;
            resultTextView.setText(String.valueOf(sum));
        } else {
            resultTextView.setText("Please enter both numbers");
        }
    }
}